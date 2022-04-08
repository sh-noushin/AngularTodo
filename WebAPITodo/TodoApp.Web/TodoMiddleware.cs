using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using System.Threading.Tasks;
using Microsoft.Extensions.Primitives;


namespace TodoApp.Web
{
  // You may need to install the Microsoft.AspNetCore.Http.Abstractions package into your project
  public class TodoMiddleware
  {
    private readonly RequestDelegate _next;
    private readonly ILogger _logger;


    public TodoMiddleware(RequestDelegate next, ILoggerFactory logFactory)
    {
      _next = next;
      _logger = logFactory.CreateLogger("TodoMiddleware");

    }

    public async Task Invoke(HttpContext httpContext)
    {
      _logger.LogInformation("MyMiddleware executing..");
      // await httpContext.Response.WriteAsync("Hello World!");
      StringValues headerValues = "";
      var nameFilter = "";

      httpContext.Request.Headers.TryGetValue("Token", out headerValues);
      nameFilter = headerValues.ToString();
      _logger.LogInformation(nameFilter);

      if (httpContext.Request.Headers.TryGetValue("Token", out headerValues))
      {
        nameFilter = headerValues.ToString();
      }

      await _next(httpContext); // calling next middleware
    }
  }

  // Extension method used to add the middleware to the HTTP request pipeline.
  public static class TodoMiddlewareExtensions
  {
    public static IApplicationBuilder UseTodoMiddleware(this IApplicationBuilder builder)
    {
      return builder.UseMiddleware<TodoMiddleware>();
    }
  }
}
