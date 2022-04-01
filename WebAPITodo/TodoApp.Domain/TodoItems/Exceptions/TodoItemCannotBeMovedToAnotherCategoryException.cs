using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TodoApp.Domain.TodoItems.Exceptions
{
    public class TodoItemCannotBeMovedToAnotherCategoryException:Exception
    {
        public TodoItemCannotBeMovedToAnotherCategoryException(Guid id , string title)
            : base($"Category with id {id} already has TodoItem with title {title} .")
        {

        }
    }
}
