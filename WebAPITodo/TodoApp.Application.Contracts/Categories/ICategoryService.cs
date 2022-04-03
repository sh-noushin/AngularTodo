using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TodoApp.Application.Contracts.Categories.Dtos.Request;
using TodoApp.Application.Contracts.Categories.Dtos.Response;
using TodoApp.Application.Contracts.Core.Dtos.Responses;


namespace TodoApp.Application.Contracts.Categories
{
  public interface ICategoryService
  {
    Task CreateAsync(CategoryCreateRequest input);
    Task UpdateAsync(Guid id, CategoryUpdateRequest input);
    Task DeleteAsync(Guid id);
    Task<PagedResultResponse<CategoryResponse>> GettAllAsync(GetCategoriesRequest filter);
    Task<List<CategoryResponse>> GettAllAsync();
    Task<CategoryResponse> GetByIdAsync(Guid id);
    Task AddTodoItemAsync(Guid id, CategoryAddTodoItemRequest input);
  }
}
