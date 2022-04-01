using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TodoApp.Application.Contracts.Core.Dtos.Responses;
using TodoApp.Application.Contracts.TodoItems;
using TodoApp.Application.Contracts.TodoItems.Dtos.Request;
using TodoApp.Application.Contracts.TodoItems.Dtos.Response;
using TodoApp.Domain.Categories;
using TodoApp.Domain.Categories.Exceotions;
using TodoApp.Domain.TodoItems;
using TodoApp.Domain.TodoItems.Exceptions;

namespace TodoApp.Application.TodoItems
{
    public class TodoItemService : ITodoItemService
    {

        private readonly ITodoItemRepository _todoitemRepository;
        private readonly ICategoryRepository _categoryRepository;
        private readonly IMapper _mapper;
        public TodoItemService(ITodoItemRepository todoItemRepository, ICategoryRepository categoryRepository, IMapper mapper)
        {

            _todoitemRepository = todoItemRepository;
            _categoryRepository = categoryRepository;
            _mapper = mapper;
        }
        public async Task<TodoItemResponse> GetByIdAsync(Guid id)
        {

            return _mapper.Map<TodoItem, TodoItemResponse>(await _todoitemRepository.GetAsync(id));
        }

        public async Task CreateAsync(TodoItemCreateRequest input)
        {
            if (!_categoryRepository.AnyAsync(x => x.Id == input.CategoryId).Result)
            {
                throw new CategoryNotFoundException(input.CategoryId);
            }
            var todoitem = new TodoItem(input.Title, input.CategoryId);
            todoitem.Done = input.Done;
            todoitem.Description = input.Description;
            if (await _todoitemRepository.AnyAsync(x => x.CategoryId == todoitem.CategoryId & x.Title == todoitem.Title))
            {
                throw new TodoItemAlreadyExistsException(todoitem.Title, input.CategoryId);
            }
            await _todoitemRepository.CreateAsync(todoitem);

        }

        public async Task DeleteAsync(Guid id)
        {
            await _todoitemRepository.DeleteAsync(id);
        }

        public async Task<List<TodoItemResponse>> GetAllAsync()
        {


            return _mapper.Map<List<TodoItem>, List<TodoItemResponse>>(await _todoitemRepository.GetListAsync());



        }

        public async Task UpdateAsync(Guid id, TodoItemUpdateRequest input)
        {
            var todoitem = await _todoitemRepository.GetAsync(id);
            if (await _todoitemRepository.AnyAsync(x => x.CategoryId == todoitem.CategoryId & x.Id != id & x.Title == input.Title))
            {
                throw new TodoItemAlreadyExistsException(input.Title); ;
            }
            todoitem.SetTitle(input.Title);
            todoitem.Done = input.Done;
            await _todoitemRepository.UpdateAsync(todoitem);
        }

        public async Task MoveToAnotherCategoryAsync(Guid id, TodoItemChangeCategoryRequest input)
        {
            var todoitem = await _todoitemRepository.GetAsync(id);
            if (await _todoitemRepository.AnyAsync(x => x.CategoryId == input.CategoryId & x.Title == todoitem.Title))
            {
                throw new TodoItemCannotBeMovedToAnotherCategoryException(input.CategoryId, todoitem.Title);
            }

            todoitem.SetCategoryid(input.CategoryId);
            await _todoitemRepository.UpdateAsync(todoitem);
        }

        public async Task<PagedResultResponse<TodoItemResponse>> GetAllAsync(GetTodoItemsRequest input)
        {
            long totalCount = await _todoitemRepository.GetCountAsync(input.FilterText);

            var items = await _todoitemRepository.GetAllAsync(
                 input.FilterText,
                input.Sorting,
                input.SkipCount,
                input.MaxReasultCount);

            return new PagedResultResponse<TodoItemResponse>()
            {
                TotalCount = totalCount,
                Items = _mapper.Map<List<TodoItem>, List<TodoItemResponse>>(items)
            };
                
                
                
        }
    }
}
