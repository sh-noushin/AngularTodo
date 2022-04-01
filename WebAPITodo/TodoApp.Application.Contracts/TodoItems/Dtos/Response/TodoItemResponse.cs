using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TodoApp.Application.Contracts.TodoItems.Dtos.Response
{
  public  class TodoItemResponse
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public bool Done { get; set; }
        public string Description { get; set; }
    }
}
