using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Dynamic.Core;
using System.Threading.Tasks;
using TodoApp.Domain.Categories;
using TodoApp.Domain.Categories.Exceotions;
using TodoApp.Domain.Core.Extensions;
using TodoApp.Domain.Shared.Categories;
using TodoApp.Domain.TodoItems;
using TodoApp.EntityFrameworkCore.Core;

namespace TodoApp.EntityFrameworkCore.Categories
{
    public class CategoryRepository : BaseRepository<TodoAppDbContext, Category, Guid>, ICategoryRepository
    {
        public CategoryRepository(TodoAppDbContext db) :
            base(db)
        {
        }

        public Task AddTodoItemAsync(TodoItem input)
        {
            throw new NotImplementedException();
        }

        public async Task<Category> GetByNameAsync(string name)
        {
            var category = await Db.Categories.FirstOrDefaultAsync(x => x.Name == name);
            if (category == null)
            {
                throw new CategoryNotFoundException(name);
            }
            return category;
        }
        public async Task<List<Category>> GetAllAsync(string filterText, string sorting = null, int skipCount = 0, int maxResultCount = 10)
        {
            var query = await QueryableAsync();
            query = ApplyFilter(query, filterText)
                .OrderBy(!string.IsNullOrEmpty(sorting) ? sorting : CategoryConsts.DefaultSorting)
                .PageBy(skipCount, maxResultCount);
                       
            return await query.ToListAsync();
        }
        protected IQueryable<Category> ApplyFilter(IQueryable<Category> query, string name)
        {
            return query.WhereIf(!string.IsNullOrEmpty(name), x => x.Name.ToLower().Contains(name.ToLower()));

        }

    public async Task<List<Category>> GetAllAsync()
    {
      var query = await QueryableAsync();
      
      return await query.ToListAsync();
    }
   

    public async Task<long> GetCountAsync(string filterText)
        {
            var query = await QueryableAsync();
            query = ApplyFilter(query, filterText);

            return await query.CountAsync();
        }


    }
}
