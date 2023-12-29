---
external: false
title: Solving data dependency issues with DAGs
description: Why theory is increasingly relevant in fullstack engineering.
date: 2023-12-29
---

# Problem

As I began to flush out my `Adktech` application framework for rapid fullstack development in `C#`, I wanted a system to automatically generate fake (but real-looking) data for my applications so that I could efficiently design UI components around what the data would actually look like, (obviously) without using real customer data. 

I made a system to do this using [`Bogus`](https://github.com/bchavez/Bogus) with an integration with [`EFCore`](https://github.com/dotnet/efcore). 
All I have to do is create a `DataFaker` for a given data type `T` that implements the `Configure` method of the following abstract class:

```csharp
public abstract class DataFaker<T> : IDataFaker where T : class, IDataRecord
{
    public Faker<T>? Faker;
    public virtual Type EntityType => typeof(T);
    public virtual (int Minimum, int Maximum) Range => (10, 20);

    public IEnumerable<T> Generated { get; set; } = Enumerable.Empty<T>();

    public Faker<T> GetFaker() 
    {
        var faker = new Faker<T>()
            .RuleFor(i => i.Active, (f,u) => f.Random.Bool(0.9f));

        return Configure(faker);
    }
    public abstract Faker<T> Configure(Faker<T> faker);
    ...
}
```

Then, all I have to do to generate data for a database table (using code-first entity framework core) is to write a custom faker:

```csharp
public class ClientFaker : DataFaker<Client>
{
    public override Faker<Client> Configure(Faker<Client> faker)
    {
        var z = new Faker("en");
        var zipCodes = Enumerable.Range(0, 10).Select(_ => z.Address.ZipCode()).ToList();
        return faker
            .RuleFor(i => i.Address, (f, u) => f.Address.StreetAddress())
            .RuleFor(i => i.Name, (f,u) => f.Company.CompanyName())
            .RuleFor(i => i.Product, (f, u) => f.Commerce.ProductName())
            .RuleFor(i => i.City, (f,u) => f.Address.City())
            .RuleFor(i => i.State, (f,u) => f.Address.State())
            .RuleFor(i => i.Zip, (f,u) => f.PickRandom(zipCodes))
            .RuleFor(i => i.Sales, (f, u) => f.Finance.Amount(500, 100000000))
            .RuleFor(i => i.Costs, (f, u) => f.Finance.Amount(100, 100000))
            .RuleFor(i => i.DateFounded, (f, u) => f.Date.Random())
            .RuleFor(i => i.DateClosed, (f, u) => f.Random.Bool() ? null : f.Date.Past(1))
            .RuleFor(i => i.Shipped, (f, u) => f.Random.Bool());
    }
    public override (int, int) Range => (50, 100);
}
```


This framework works _great_ for the sort of rapid small-business-application development that I use this framework for, but there is one problem with this sort of data generation: __hierarchical data__. 
That is, data that need to be generated _based on other generated data_. In typical relational database applications, it is easy to consider that you may have a data dependency between related database object, such as a client-order system where the details may include some information about other associated clients:

![Simple object hierarchy](../images/musings/adktech-dags/hierarchy.png)

In this case, we need to make sure that the data is generated in a proper order, such that the `OrderDetail` fake data is generated after both the `Client` and `Order` data. How can we do this?

# Solution

If you've taken any sort of introductory Computer Science class, then you probably recognize the data dependency model as a `DAG` (directed acyclic graph). In this case, you also probably know that as long as we [topological sort](https://en.wikipedia.org/wiki/Topological_sorting) the input DAG. However, we still need to generate the DAG itself from our code-first models.

## Creating the DAG

To ensure consistency in our DAG, I decided to use _reflection_ to generate the DAG _directly_ from the faker types themselves. This construction is only done in _debug_ (and not the production application), so the expensive reflection overhead is not really a factor.

In order to determine the dependencies of each faker, whenever a faker relies on data produced by another, it takes that `DataFaker` as a _constructor argument_ (which is automatically populated by dependency injection). This way, I can reflect the arguments of the constructor on startup, and thus determine which fakers depend on which others.

An example construction for the `OrderDetail` model listed above would be something like:

```csharp
public class OrderDetailFaker : DataFaker<OrderDetail>
{
    public OrderDetailFaker(ClientFaker clientFaker, OrderFaker orderFaker) {...}

    public override Faker<OrderDetailFaker> Configure(Faker<OrderDetailFaker> faker)
    {
        var clients = clientFaker.Generated;
        var orders = orderFaker.Generated;
        ...
    }
} 
```

Once the DAG is created in this way, we can just topological sort the graph and iterate over it in topological order, generating the fake data as we go:

```csharp
var fakers = serviceProvider.GetServices<IDataFaker>();
var fakerDAG = CreateFakerDAG(fakers);
foreach (var faker in fakerDAG.Topological())
{
    var data = faker.Generate();
    context.AddRange(data);
    await context.SaveChangesAsync();
}
```

I came up with this system several years ago, but find it somewhat interesting and a useful example of how theory, data, and reflection can come together to create a really tighty-coupled development system that makes my life a whole lot easier.