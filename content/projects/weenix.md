---
title: Weenix - OS Kernel in C
description: Course project for Brown's CSCI2670 (Operating Systems w/ Lab)
date: 2023-11-13
external: false

---

# Weenix

Few courses can provide as cohesive a final project as Brown's Operating Systems (w/ Lab), aka CSCI1670/1690 (or [CSCI2670](http://www.cs.brown.edu/courses/csci1670/), the version I took which pushes the lab slot into a single 1 credit course). This course, led by esteemed [Professor Thomas W. Doeppner Jr](https://cs.brown.edu/people/faculty/twd/), teaches students the intricacies of historic and modern operating systems (both Linux and Windows, albeit a larger focus of the course is on Unix-based systems). 

I personally looked forward to taking the course from my first semester at Brown, but didn't get around to actually taking it until my Junior year. That being said, I had a blast with the course as a whole, and particularly the course's flagship assignment: __Weenix__, where we had to implement the inner workings of a Unix-like operating system. The project was incredibly time consuming (each part took easily more than 20 hours of implementation and debugging), but simultaneously _incredibly rewarding_. 

I wanted to write a little bit about the assignment to highlight the aspects of the project for anyone who is curious (prospective students, potential employers, myself 10 years later, etc).

## 1. Processes and Threads

The first project for the course had us implement kernel-space process and thread system. 

Since this is the first project working on the __Weenix__ system as a whole, there was a little bit of getting used to the bootloader, scaffolded codebase, and memory management systems, but after a bit of digging around I found my bearings and got started.

The threading model is typical for Unix-like systems: each CPU core has a scheduler that context-switches between different threads depending on their priority and their [time slice](https://en.wikipedia.org/wiki/Preemption_(computing)#Time_slice). We made sure that the threads who were (1) waiting on a (kernel-space) mutex or (2) starting up had the correct place in the `runq` (the queue in which the scheduler would pull threads to run from). Some of the basic threading model can be seen below:

![Some of the Weenix threading model](../images/projects/weenix/threads.png)

We also had to implement some basic syscalls to to interact with processes, such as `waitpid`, from scratch. For synchronization, we could really only use `spinlock`'s, because as the _kernel_, we have to _implement_ other forms of mutual exclusion (such as traditional blocking `Mutex`'s), and so can't depend on them ourselves.

## 2. Drivers

We next had to implement a custom `tty` driver (terminal) for our OS. To do this, we had to write handlers for keyboard input on a _per keystroke_ basis, and then how to handle that input to form command strings for the terminal, using a circular buffer. We had to manage different `chardev` devices (character devices, synonymous with terminals) and implement a basic `terminal` wrapper that the user could interact with, as seen below:

![Basic TTY interaction.](/images/projects/weenix/drivers.png)

On top of the terminal, we also had to write a basic [SATA](https://en.wikipedia.org/wiki/SATA) driver to interact with block-level storage systems (which we would later use to implement our block-level file system, `S5FS`).

By the end of this project, the user could interact with the terminal, but no commands were ready. But don't wait, these basic commands like `ls` and `cd` would come later, in `VFS`.

## 3. VFS (Virtual File System)

`VFS` really teaches you how useless an operating system would be without a filesystem. Without a filesystem, you can't:

1. Have any files or persistant storage
2. Run anything (_executables are files too!_)
3. Interact with the computer in any way (drivers generally run through _the filesystem_, as `blockdev`s or `chardev`s)

In `VFS`, we had to implement the basic syscalls for traversing the virtual filesystem structure (including finding subdirectories, listing files, representing files/directories as abstract `vnode`'s, and linking nodes with `ln`). This meant that we could interact with the computer in a more familiar way:

![VFS in action](/images/projects/weenix/vfs.png)

This may sound trivial, but this is where things start to get complicated. There are a _ton_ of edge-cases that arise when dealing with the tree-structure of a filesystem, especially all of the syscalls (`ls`, `cd`, `ln`, etc). However, with a bit of careful testing, everything came to work correctly.

However, at this point we still couldn't _persist_ anything in the filesystem (for `VFS` we ran a simple in-memory filesystem to test with), because we weren't actually writing anything to `SATA` disks. This would change in `S5FS`...

## 4. S5FS (S5 File System)

`S5FS` is the name of an educational-level filesystem from Tom's book for the course, and it really just a basic block-level file system with just a few simplifications to the more robust filesystems like `EXT4` that run modern Linux systems:

1. Each file has exactly `28` direct blocks (a block is a location of fixed size on a SATA device)
2. Each file has only `1` indirect block, containing a fixed number of direct blocks
3. There are no fancy redundancy systems in place in the case of a system outage

So, we were in charge of ensuring that when a user writes to position `p` on file `f`, that write gets mapped to the _exact block on the physical `SATA` hardware as it expects_, and that that metadata is stored correctly on the `s5_node` representing the file to the kernel.

This meant that we could actually print large files on the system with `cat`, and that our changes would actually be written to disk and be available after a reboot:

![Hamlet being read from a block device.](/images/projects/weenix/s5fs.png)

Still, there was work to be done, since all of this was using _kernel-space_. Where, oh where, could my user-space be?

## 5. VM (Virtual Memory)

Now _this_ is where it gets fun. 

`VM` reminds you very early on that _memory is complicated_. For this part of the assignment, we had to implement (I'm definitely missing some things):

1. Managing virtual memory areas (`VMA`s) and pages within them (`mmap`, `munmap`)
2. Handling `brk()` and managing the user's heap space
3. Implementing page faults, segmentation faults, and userspace memory permissions
4. Creating userspace syscalls for `read`, `write`, and `stat` (interacting with the virtual memory system to ensure that the addresses that you want to read/write from are from your own address space)
5. Creating new processes with `fork()` and implementing copy-on-write paging with shadow objects to prevent copying the entire original memory space of the process
6. Managing hierarchical page-tables and the [Translation lookaside buffer (TLB)](https://en.wikipedia.org/wiki/Translation_lookaside_buffer) to map hardware pages/addresses to virtual pages/addresses

There were a _variety_ of tests we had to run to make sure all of this worked (on top of unit tests that we had to write ourselves to prevent off-by-one errors all over the place):

![memtest working!](/images/projects/weenix/vm.png) 

This project was __wonderful__, albeit incredibly challenging. The number of things that need to be working properly in order to even _get into userspace_ is incredible (ELF loaders, memory boundaries/lookups, virtual memory areas), let alone the complete functionality.

By the end of the project, our basic __Weenix__ OS had a complete user-space execution system that could trap into the kernel using syscalls, which is really all that you need in a basic microkernel OS.

# Conclusion

__Weenix__ was a great project for learning both (1) the inner-workings of operations systems that we often just take for granted, and (2) how to work with a large-scale low-level system in an effective way.

`VM` has also given a lot of insight to how to make _performant memory-optimized systems_ by enlightening me on the inner workings of page-management and how different memory allocation methods work and differ (`malloc`, `mmap`, etc).

Thanks to Tom and the TA staff for such an incredible and useful course!

> Weenix has halted cleanly! 
    - Weenix (after halting cleanly)

![The End.](/images/projects/weenix/halted.png)
