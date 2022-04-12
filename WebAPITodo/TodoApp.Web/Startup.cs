using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Primitives;
using Microsoft.OpenApi.Models;
using System;
using System.Threading.Tasks;
using TodoApp.Application.Auth;
using TodoApp.Application.Categories;
using TodoApp.Application.Contracts.Auth;
using TodoApp.Application.Contracts.Categories;
using TodoApp.Application.Contracts.TodoItems;
using TodoApp.Application.Contracts.Users;
using TodoApp.Application.TodoItems;
using TodoApp.Application.Users;
using TodoApp.Domain.Categories;
using TodoApp.Domain.TodoItems;
using TodoApp.Domain.Users;
using TodoApp.EntityFrameworkCore;
using TodoApp.EntityFrameworkCore.Categories;
using TodoApp.EntityFrameworkCore.TodoItems;
using TodoApp.EntityFrameworkCore.Users;
using Microsoft.AspNetCore.Http.Headers;




namespace TodoApp.Web
{
  public class Startup
  {
    public Startup(IConfiguration configuration)
    {
      Configuration = configuration;

    }

    public IConfiguration Configuration { get; }

    // This method gets called by the runtime. Use this method to add services to the container.
    public void ConfigureServices(IServiceCollection services)
    {
      services.AddCors(options =>
      {
        options.AddPolicy(name: "AllowOrigin",
                  builder =>
                  {
                builder.WithOrigins("http://localhost:44351", "http://localhost:5001", "http://localhost:4200")
                                          .AllowAnyHeader()
                                          .AllowAnyMethod();
              });
      });

      services.AddDbContext<TodoAppDbContext>(options =>
          options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));

      services.AddScoped<ICategoryService, CategoryService>();
      services.AddScoped<ITodoItemService, TodoItemService>();
      services.AddScoped<IMyUserService, MyUserService>();
      services.AddScoped<IAuthService, AuthService>();
      services.AddScoped<UserManager, UserManager>();


      services.AddScoped<ICategoryRepository, CategoryRepository>();
      services.AddScoped<ITodoItemRepository, TodoItemRepository>();
      services.AddScoped<IUserRepository, UserRepository>();


      services.AddControllers();


      services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());
      services.AddSwaggerGen(c =>
      {
        c.SwaggerDoc("v1", new OpenApiInfo { Title = "TodoApp.Web", Version = "v1" });
      });

    }

    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
    {
      if (env.IsDevelopment())
      {
        app.UseDeveloperExceptionPage();
        app.UseSwagger();
        app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "TodoApp.Web v1"));
      }

      app.UseTodoMiddleware();
      app.UseCors("AllowOrigin");
      app.UseHttpsRedirection();

      app.UseRouting();

      app.UseAuthorization();

      app.UseEndpoints(endpoints =>
      {
        endpoints.MapControllers();
      });

      app.UseCors("AllowOrigin");


     

      //app.Run(async (context) =>
      //{
      //  await context.Response.WriteAsync("Hello World!");
      //});





    }

  }
}

