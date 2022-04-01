using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TodoApp.Application.Contracts.Core.Dtos.Responses;
using TodoApp.Application.Contracts.TodoItems.Dtos.Request;
using TodoApp.Application.Contracts.TodoItems.Dtos.Response;

namespace TodoApp.Application.Contracts.TodoItems
{
    public interface  ITodoItemService
    {
        public Task CreateAsync(TodoItemCreateRequest input);
        public Task DeleteAsync(Guid id);
        public Task UpdateAsync(Guid id ,TodoItemUpdateRequest input);
        public Task<TodoItemResponse> GetByIdAsync(Guid id);
        public Task<List<TodoItemResponse>> GetAllAsync();
        public Task MoveToAnotherCategoryAsync(Guid id,TodoItemChangeCategoryRequest input);
        public Task<PagedResultResponse<TodoItemResponse>> GetAllAsync(GetTodoItemsRequest input);


    }
}
