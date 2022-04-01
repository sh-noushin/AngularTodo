using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Linq.Dynamic.Core;
using System.Threading.Tasks;
using TodoApp.Domain.Core.Extensions;
using TodoApp.Domain.Shared.TodoItems;
using TodoApp.Domain.TodoItems;
using TodoApp.Domain.TodoItems.Exceptions;
using TodoApp.EntityFrameworkCore.Core;

namespace TodoApp.EntityFrameworkCore.TodoItems
{
    public class TodoItemRepository : BaseRepository<TodoAppDbContext , TodoItem , Guid> , ITodoItemRepository
    {

       

        public TodoItemRepository(TodoAppDbContext db)
            :base(db)
        {
            
        }

             
       
        public async Task<TodoItem> GetByTitleAsync(string title)
        {
            var todoitem = await Db.TodoItems.FirstOrDefaultAsync(x => x.Title == title);
            if(todoitem == null)
            {
                throw new TodoItemNotFoundException(title); ; 
            }
            return todoitem;
        }

        public async Task<List<TodoItem>> GetDoneItemsAsync()
        {
            return await Db.TodoItems.Where(x => x.Done == true).ToListAsync();
            
        }

        public async Task<List<TodoItem>> GetAllAsync(string filterText, string sorting = null, int skipCount = 0, int maxResultCount = 10) { 

            var query = await QueryableAsync();
            query = ApplyFilter(query, filterText)
                .OrderBy(!string.IsNullOrEmpty(sorting) ? sorting : TodoItemConsts.DefaultSorting)
                .PageBy(skipCount,maxResultCount);
            
            return await query.ToListAsync();


        }
        protected IQueryable<TodoItem> ApplyFilter(IQueryable<TodoItem> query, string filter)
        {
            return query.WhereIf(!string.IsNullOrEmpty(filter), x => x.Title.ToLower().Contains(filter.ToLower()) || x.Description.ToLower().Contains(filter.ToLower()));
                //.WhereIf(!string.IsNullOrEmpty(filter), x => x.Description.ToLower().Contains(filter.ToLower()));
                

        }

        public async Task<long> GetCountAsync(string filterText)
        {
            var query = await QueryableAsync();
            query = ApplyFilter(query, filterText);

            return await query.CountAsync();


             
        }
    }
}
