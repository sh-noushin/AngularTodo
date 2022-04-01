using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TodoApp.Domain.TodoItems.Exceptions
{
   public class TodoItemNotFoundException:Exception
    {
        public TodoItemNotFoundException(string name)
            : base($"TodoItem with name {name} not found.")
        {

        }
        public TodoItemNotFoundException(Guid id)
            : base($"TodoItem with id {id} not found.")
        {

        }
    }
}
