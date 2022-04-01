using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Primitives;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TodoApp.Application.Contracts.Core.Dtos.Responses;
using TodoApp.Application.Contracts.TodoItems;
using TodoApp.Application.Contracts.TodoItems.Dtos.Request;
using TodoApp.Application.Contracts.TodoItems.Dtos.Response;

namespace TodoApp.Web.Controllers 
{


    [ApiController]
    [Route("[controller]")]
   
    public class TodoItemsController : ControllerBase
    {

        private readonly ITodoItemService _todoitemService;

        public TodoItemsController(ITodoItemService todoItemService)

        {
            _todoitemService = todoItemService;
        }



        [HttpPost]
        public async Task<string> CreateAsync(TodoItemCreateRequest input)
        {
            await _todoitemService.CreateAsync(input);
            return Task.FromResult("Created").ToString();

        }


        [HttpGet]
        public async Task<List<TodoItemResponse>> GetAllAsync ()
        {

            return await _todoitemService.GetAllAsync();

        }

        [HttpGet]
        [Route("{id}")]
        public async Task<TodoItemResponse> GetByIdAsync(Guid id)
        {
            return await _todoitemService.GetByIdAsync(id);
        }

        

        [HttpGet]
        [Route("FilteredTodoItems")]
        public async Task<PagedResultResponse<TodoItemResponse>> GetAllAsync([FromQuery] GetTodoItemsRequest input)
        {
            StringValues headerValues="";
            var nameFilter = "";
            if (Request.Headers.TryGetValue("Token", out headerValues))
            {
                nameFilter = headerValues.FirstOrDefault();

            }
            return await _todoitemService.GetAllAsync(input);
        }

        [HttpPut]
        [Route("{id}")]
        public async Task<string> UpdateASync(Guid id , TodoItemUpdateRequest input)
        {
            await _todoitemService.UpdateAsync(id, input);
            return Task.FromResult("Updated").ToString();


        }



        [HttpPut]
        [Route("MoveToAnotherCategoryAsync/{id}")]
        public async Task<string> MoveToAnotherCategoryAsync(Guid id, TodoItemChangeCategoryRequest input)
        {
            await _todoitemService.MoveToAnotherCategoryAsync(id, input);
            return Task.FromResult("Updated").ToString();


        }




        [HttpDelete]
        [Route("{id}")]
        public async Task<string> DeleteAsync(Guid id)
        {
            await _todoitemService.DeleteAsync(id);
            return Task.FromResult("Deleted").ToString();

        }

        
    }
}
