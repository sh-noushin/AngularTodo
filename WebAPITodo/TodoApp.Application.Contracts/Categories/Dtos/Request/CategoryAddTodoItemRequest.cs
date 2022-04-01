using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TodoApp.Domain.TodoItems;

namespace TodoApp.Application.Contracts.Categories.Dtos.Request
{
   public class CategoryAddTodoItemRequest
    {
        public string Title { get; set; }
        public bool Done { get; set; }
        public string Description  { get; set; }
    }
}
