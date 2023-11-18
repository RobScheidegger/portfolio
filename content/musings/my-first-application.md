---
external: false
title: I sold my first production application in 7th grade.
description: How I did it, why I did it, and where it is now.
date: 2023-11-13
---

# Hello World!

I was fortunate to start learning my first programming language, C#, when I was around 11 years old. My father worked as an IT Consultant, and while he didn't really know any modern programming languages or software development ([COBOL](https://en.wikipedia.org/wiki/COBOL) and [dBase](https://en.wikipedia.org/wiki/DBase) were more his style), he had access to some online tutorials for learning C# from a Microsoft vendor that he very kindly lent me the credentials for.   

When I came home from school for the next few months after learning about this, I would spend hours and hours pouring over these tutorials. I started with traditional WinForms applications and made some games that I could play, that naively used the `System.Drawing` API to render some basic lines and figures to the screen.

This was along the same time that I was learning algebra in school, so I recall also making a basic graphing interface to render simple polynomial functions, which actually served me well in offloading some of my brainpower when doing homework assignments.


One of the first things that led me to spend a lot more time programming was [projecteuler.net](https://projecteuler.net/), a website containing a wide array of mathematical puzzles and challenges that were intended to be solved with mathematical intuition in conjunction with computer programming. I actually kept doing these for a while into high school (which parallelized well with the additional math that I was learning at the time), and to date I have a (respectable) 126 problems solved, which puts me still in the top 1% of users on the site.

## Becoming Useful

Eventually, I transitioned to making basic data driven applications that linked to local databases (CSV/Access Databases), and displayed this data to users in various forms. 

One day, my dad started talking to me about a problem that one of his IT clients was facing. A painting company (which I will not name here since I haven't gotten their explicit permission to do so) had an old paint mixing database that stored historic customer data (the exact formulas used to create the colors that they painted peoples' houses with) that was no longer compatible with the new system they were using, which took different fractions for computing paint mixes than the old database stored.

I mentioned that I might be able to help out, and with permission from all parties, I started working on an application to display the historic customer data and display the required computed fields to the user.


# What I Wrote

What I ended up creating was a simple, database driven `WinForms` application in `C#`, that simply acted as an GUI for a static database file that contained some historic job data that was incompatible with the newer system that they had transitioned to. Really, all that this did was:

1. Load the database file from the local disc (it was small enough that it could easily be stored locally, and in this context data security wasn't really a concern).
2. Re-set the selection options based on which of the other options were selected.
    - Aka, when the user selects a customer, show them all of the job sites for that customer.
3. Display the paint values in the exact fraction formats desired for the new system (48ths, 96ths).

I actually didn't even have to write _any_ custom SQL or database code! The bulk of this work was done by atomatic __Visual Studio__ wizards that created a `JobFormulasDataSet` (which inherited from the `System.Data.DataSet`) to automatically handle fetching the data and filling it into the forms. 

![alt](https://learn.microsoft.com/en-us/visualstudio/ide/media/vs-2022/csharp-winform-hello-world-project-toolbox.png?view=vs-2022)

All I had to do was design the application using the built-in UI designer for Windows forms, and write some simple numeric conversion helpers to convert the values into the right format.

Unfortunately, I can't publish all of the code here or make it public (since I would need permission of the company involved to do so), but recently I took a look at what I wrote all those years ago, and I can share some funny functions that I wrote back then...

## Funny Code

As one would expect, a 7th grader does not necessarily produce the finest code, and so I wanted to share some funny functions that I wrote as part of this application.

### Finding the Whole Part of a Decimal

I needed to do this in order to display the non-fractional part of the paint mix. Instead of using a builtin function, I did the following:

```csharp
private int GetWhole(decimal d)
{
    bool exit = false;
    int i = 0;
    while (exit == false)
    {
        if (i > d)
        {
            exit = true;
            i -= 2;
        }
        i++;
    }
    return i;
}
```

Looking at this now, I almost couldn't believe that this _worked_, because of the `i -= 2`, which really seems confusing. However, if you stare at this for long enough, then it becomes clear that this silly function is __correct__, even though I definitely should have used a builtin.

### Getting the 96ths Fraction from a Decimal

Again, in hindsight, this is not hard to do at all, but this is how I decided to do it when I was in 7th grade:

```csharp
private int Get96ths(decimal d)
{
    int s1 = -1;
    int s2 = 0;
    decimal c;
    bool exit = false;
    while (exit == false)
    {
        c = decimal.Divide(s2, 96);
        if (c >= d)
        {
            exit = true;
        }
        else
        {
            s1++;
            s2++;
        }
        
    }
    decimal a = decimal.Divide(s1, 96);
    decimal b = decimal.Divide(s2, 96);
    decimal e = Math.Abs(d - a);
    decimal f = Math.Abs(d - b);
    if (e > f)
    {
        return s2;
    }
    else
    {
        return s1;
    }
}
```

At this point, I'm not even going to try to reason through _why_ or _how_ this produces the correct answer, but somehow, it worked. I also had another helper to do the same thing for the 48ths of a number that took the 96th fraction:

```csharp
private int Get48ths(int i)
{
    int l;
    Math.DivRem(i, 2, out l);
    return l;
}
```

### Formatting the Output String

You've probably made the astute observation that I was opposed to using convenient built-ins or efficient algorithms for this project, so you probably won't be surprised by the following (though you might find it amusing...):

```csharp
private string FormatString(string s)
{
    string a = s.Remove(0, 2);
    string b = s.Remove(1, s.Count()-1);
    decimal d = Convert.ToDecimal(a);
    int whole = GetWhole(d);
    d -= whole;
    int total96ths = Get96ths(d);
    int total48ths;
    if (Get48ths(total96ths) == 1)
    {
        total48ths = (total96ths - 1) / 2;
        total96ths = 1;
    }
    else
    {
        total48ths = (total96ths) / 2;
        total96ths = 0;
    }
    string rt = b + "    " + whole.ToString() + "   " + total48ths.ToString() + "/48    " + total96ths.ToString() + "/96   oz";
    return rt; 
}
```

This might be the least egregious of the bunch, but I still find it funny that how I turned such a simple computation into such an interesting one.

> I swear, I've gotten a _lot_ better at software engineering since then. If you are interested in hiring me or having me engineer something for you, I ask that you please don't hold my 7th grade coding mistakes against me.

# Profit

After I completed this little project, I shipped off the executable to the computer that would be used to view the data, and got a few hundred dollars for my efforts.

Now, at the time, this was _absolutely mind-blowing_, because I had never really had an allowance growing up, and the only real money I ever had on me was a few bucks that I'd ask my parents to borrow to pay for school field trips.

Earlier this year (_2023_), I actually asked the company if they are still using my application, and to my surprise: __they are__! Somehow, even all these years later, my (semi-questionable) middle-school code has served as a key access point into data that has influence the color of many people's houses.

Needless to say, I'm incredibly grateful and fortunate to have been exposed to such a fascinating field at such a young age. Writing programs like the one described here, no matter how simple at heart, fostered my creativity and gave me an outlet to explore mathematical and algorithmic ideas in a way that even a middle schooler could earn a few bucks from. 