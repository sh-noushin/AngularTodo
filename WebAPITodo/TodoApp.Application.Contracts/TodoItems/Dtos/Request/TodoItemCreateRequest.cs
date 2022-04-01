using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TodoApp.Application.Contracts.TodoItems.Dtos.Request
{
   public class TodoItemCreateRequest
    {
        public string Title { get; set; }
        public bool Done { get; set; }
        public Guid CategoryId { get; set; }
        public string Description { get; set; }
    }
}
