using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using TodoApp.Domain.Core;
using TodoApp.Domain.TodoItems;

namespace TodoApp.Domain.Categories
{
    public interface ICategoryRepository : IBaseRepository<Category, Guid>
    {
       Task<Category> GetByNameAsync(string name);
        public Task AddTodoItemAsync(TodoItem input);
        public Task<List<Category>> GetAllAsync(string filterText , string sorting  , int skipCount = 0 , int maxResultCount = 10);
        public Task<long> GetCountAsync(string filterText);


    }
}
