using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TodoApp.Domain.TodoItems.Exceptions
{
   public class TodoItemAlreadyExistsException:Exception
    {
        public TodoItemAlreadyExistsException(string title ,Guid id)
            :base($"Category with id {id} already has TodoItem with title {title} .")
        {

        }
        public TodoItemAlreadyExistsException(string title)
            : base($"TodoItem with title {title} already exists .")
        {

        }
    }
}
