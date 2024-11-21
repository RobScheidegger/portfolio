---
title: Microsat - A tiny DPLL SAT-Solver in Rust
description: Simple, parseable, and small sat solver.
date: 2024-11-20
external: false

---

# SAT Solving

SAT Solving refers to solving [boolean satisfiability problems](https://en.wikipedia.org/wiki/Boolean_satisfiability_problem) involving boolean expressions. If you haven't been exposed to boolean expressions before, it mainly involves deciding whether a boolean expression (a series of boolean variables with `OR` or `AND` statements between them) is either:

1. `UNSAT` (Unsatisfiable) - There exists no combination of variable assignments to make the expression resolve to `true`
2. `SAT` (Satisfiable) - Finds (one possible) assignment of variables (to `true/false`) that makes the expression resolve to `true`

SAT Solving has a myriad of applications (employee scheduling, solving combinatorial optimization problems, airplane scheduling, logistics, etc), and has a long history of competitions where operations research gurus put their own SAT solvers up to the test, to see who can solve _massive_ boolean expressions, and either find `SAT` solutions, or conclude that they are `UNSAT`.

## Minisat

[`minisat`](https://github.com/niklasso/minisat) was a surprise to the SAT solver community in 2005, where it won the Industrial categories of the 2005 SAT Competition. Minisat was so surprising because _it was so small_: only around 3500 lines of code, compared to its competitors which had grown orders of magnitude larger by that point.

It was therefore seen as the _standard_ and a clear benchmark for future solvers.

## Microsat

As part of my Foundations of Prescriptive Analysis course at Brown, I had to make a SAT solver, and so my friend ([Hammad Izhar](https://github.com/Hammad-Izhar)) and I sought out to make the fastest SAT Solver that we could in `rust` (mostly for fun, but since the speed of our solver would be compared to that of everyone else in the class, we had no choice but to do everything we could).

Our solver ended up being both _fast_ and _tiny_ relative to others. We employ the [`dpll`](https://en.wikipedia.org/wiki/DPLL_algorithm) algorithm instead of the more complex CDCL one that `minisat` uses, meaning that while our performance is quite good on smaller SAT problems, we admittedly fall off significantly for larger instances (and so in that sense, are in no means competitive with `minisat`).

Yet, I am very happy with our implementation, since I feel that our solution is _understandable_ while still being highly performant, something that is often hard to find. For instance, the main DPLL loop is as follows, which clearly illustrates how our algorithm works, and in particular, the concepts of:

1. __Inference__ - Using logical deduction to remove clauses/variables that we know we can assign to a given variable.
2. __(Informed) Search__ - (Semi-) Randomly searching new values after no additional inference is possible. This generally involves _branching_ on a randomly chosen variable and exploring the subtree defined by it.

The main `microsat` DPLL loop is given below:

```rust
pub fn solve_dpll(cnf: &mut Expression) -> Option<Assignment> {
    // Track where we are in the action stack
    let action_state: ActionState = cnf.get_action_state();

    // Try to do as much inference as we can before branching
    while cnf.is_inference_possible() {
        // Next, remove all of the unit clauses
        while cnf.remove_unit_clause().is_some() {}

        // If the CNF is satisfied, then we are done
        if cnf.is_unsatisfiable() {
            // Restore the action state (undo branching)
            cnf.restore_action_state(action_state);
            return None;
        }

        while cnf.remove_pure_literal().is_some() {}
    }

    if cnf.is_satisfied() {
        return Some(cnf.construct_assignment());
    }

    if cnf.is_unsatisfiable() {
        cnf.restore_action_state(action_state);
        return None;
    }

    // Pick some variable to branch on ("guess") to keep searching
    let branch_action_state = cnf.get_action_state();
    let (branch_variable, branch_value) = cnf.get_branch_variable();

    // Try the first branch value
    cnf.branch_variable(branch_variable, branch_value);

    let branch_result = solve_dpll(cnf);
    if branch_result.is_some() {
        return branch_result;
    }

    cnf.restore_action_state(branch_action_state);

    // Try the other branch value
    cnf.branch_variable(branch_variable, !branch_value);

    let branch_result = solve_dpll(cnf);
    if branch_result.is_some() {
        return branch_result;
    }

    cnf.restore_action_state(action_state);
    None
}
```

`microsat` also utilizes a minimal-copy _action stack_ to revert up the tree when individual branches are deemed infeasible.

### Performance

While clearly the CDCL solver in `minisat` will outperform the `DPLL` solver in `microsat` on larger instances, I took some example instances from a [public SAT site](https://people.sc.fsu.edu/~jburkardt/data/cnf/cnf.html) to test how we do compared to `minisat` one some smaller/puzzle-sized instances. 

Here's an example of how we compare:

|| `microsat`  | `minisat`  |
|---|---|---|
|Time to solve example suite| 44.158s  |  41.432s |
|Lines of code| 791  | 3517 |

## Code

The code for `microsat` can be found on GitHub [here](https://github.com/RobScheidegger/microsat). The crate is also published to [`crates.io`](https://crates.io/crates/microsat).

