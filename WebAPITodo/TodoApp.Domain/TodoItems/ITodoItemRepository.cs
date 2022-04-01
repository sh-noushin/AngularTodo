using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using TodoApp.Domain.Core;

namespace TodoApp.Domain.TodoItems
{
    public interface ITodoItemRepository : IBaseRepository<TodoItem , Guid>
    {

        Task<List<TodoItem>> GetAllAsync(string filterText, string sorting = null, int skipCount = 0, int maxResultCount = 10);
        Task<long> GetCountAsync(string filterText);
        Task<TodoItem> GetByTitleAsync(string title);
        Task<List<TodoItem>> GetDoneItemsAsync();
        

    }
}
