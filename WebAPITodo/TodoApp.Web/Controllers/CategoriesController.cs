using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TodoApp.Application.Contracts.Categories;
using TodoApp.Application.Contracts.Categories.Dtos.Request;
using TodoApp.Application.Contracts.Categories.Dtos.Response;
using TodoApp.Application.Contracts.Core.Dtos.Responses;
using TodoApp.Application.Contracts.TodoItems;
using TodoApp.Application.Contracts.TodoItems.Dtos.Request;
using Microsoft.AspNetCore.Http.Headers;
using Microsoft.Extensions.Primitives;

namespace TodoApp.Web.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CategoriesController : ControllerBase
    {
        

        private readonly ICategoryService _categoryService;


        public CategoriesController(ICategoryService categoryservice, ITodoItemService todoItemService)
        {
            _categoryService = categoryservice;

        }


        [HttpPost]
        public async Task<string> CreateAsync(CategoryCreateRequest input)
        {
            await _categoryService.CreateAsync(input);
            return Task.FromResult("Created").ToString();
        }

        [HttpPost]
        [Route("AddTodoItem/{id}")]
        public Task AddTodoItemASync([FromQuery] Guid id, CategoryAddTodoItemRequest input)
        {
            return _categoryService.AddTodoItemAsync(id, input);
        }



        [HttpGet]
        public async Task<PagedResultResponse<CategoryResponse>> GetAllAsync([FromQuery] GetCategoriesRequest input)
        {
      //StringValues headerValues = "";
      //var nameFilter = "";
      //if (Request.Headers.TryGetValue("Token", out  headerValues))
      //{
      //  nameFilter = headerValues.FirstOrDefault();
      //}
      return await _categoryService.GettAllAsync(input);

        } 

                


        [HttpGet]
        [Route("{id}")]
        public async Task<CategoryResponse> GetByIdAsync(Guid id)
        {
            return await _categoryService.GetByIdAsync(id);
        }

        [HttpPut]
        [Route("{id}")]
        public async Task<string> UpdateAsync(Guid id, CategoryUpdateRequest input)
        {
            await _categoryService.UpdateAsync(id, input);
            return Task.FromResult("Updated").ToString();

        }


        [HttpDelete]
        [Route("{id}")]
        public async Task<string> DeleteAsync(Guid id)
        {
            await _categoryService.DeleteAsync(id);
            return Task.FromResult("Deleted").ToString();
        }

    [HttpGet]
    [Route("AllCategories")]
    public async Task<List<CategoryResponse>> GetAllAsync()
    {
     
      return await _categoryService.GettAllAsync();

    }




  }

}
