var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/", () => "Hello DevOps");

app.MapGet("/users", () =>
{
    return new[] { "Ahmed", "Ali", "Sara" };
});

app.Run();
