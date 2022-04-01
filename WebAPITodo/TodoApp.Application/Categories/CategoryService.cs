using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TodoApp.Application.Contracts.Categories;
using TodoApp.Application.Contracts.Categories.Dtos.Request;
using TodoApp.Application.Contracts.Categories.Dtos.Response;
using TodoApp.Application.Contracts.Core.Dtos.Responses;
using TodoApp.Domain.Categories;
using TodoApp.Domain.Categories.Exceotions;
using TodoApp.Domain.TodoItems;

namespace TodoApp.Application.Categories
{
    public class CategoryService : ICategoryService
    {
        private readonly ICategoryRepository _categoryRepository;
        private readonly ITodoItemRepository _todoItemRepository;
        private readonly IMapper _mapper;

        public CategoryService(ICategoryRepository categoryrepository, IMapper mapper, ITodoItemRepository todoItemRepository)
        {
            _categoryRepository = categoryrepository;
            _mapper = mapper;
            _todoItemRepository = todoItemRepository;
        }


        public async Task CreateAsync(CategoryCreateRequest input)
        {
            var category = new Category(input.Name);
            if (await _categoryRepository.AnyAsync(x => x.Name == category.Name))
            {
                throw new CategoryAlreadyExistsException(category.Name);
            }
            await _categoryRepository.CreateAsync(category);
        }


        public async Task<PagedResultResponse<CategoryResponse>> GettAllAsync(GetCategoriesRequest filter)
        {

            long totalCount =await _categoryRepository.GetCountAsync(filter.FilterText);
                        
            var items = await  _categoryRepository.GetAllAsync(
                filter.FilterText,
                filter.Sorting, 
                filter.SkipCount,
                filter.MaxReasultCount);
            return new PagedResultResponse<CategoryResponse>()
            {
                TotalCount = totalCount,
                Items = _mapper.Map<List<Category>, List<CategoryResponse>>( items) 
            };
        }


        public async Task AddTodoItemAsync(Guid id, CategoryAddTodoItemRequest input)
        {
            var todoitem = new TodoItem(input.Title, id);
            todoitem.Done = input.Done;
            todoitem.Description = input.Description;

            await _todoItemRepository.CreateAsync(todoitem);

        }


        public async Task<CategoryResponse> GetByIdAsync(Guid id)
        {
            return _mapper.Map<Category, CategoryResponse>(await _categoryRepository.GetAsync(id));
        }

        public async Task UpdateAsync(Guid id, CategoryUpdateRequest input)
        {
            var category = await _categoryRepository.GetAsync(id);
            if (category == null)
            {
                throw new CategoryNotFoundException(id);

            }
            if (await _categoryRepository.AnyAsync(x => x.Id != id & x.Name == input.Name))
            {
                throw new CategoryAlreadyExistsException(input.Name);
            }

            category.SetName(input.Name);
            await _categoryRepository.UpdateAsync(category);
        }


        public async Task DeleteAsync(Guid id)
        {
            await _categoryRepository.DeleteAsync(id);
        }

       

        

       
        
    }


}
