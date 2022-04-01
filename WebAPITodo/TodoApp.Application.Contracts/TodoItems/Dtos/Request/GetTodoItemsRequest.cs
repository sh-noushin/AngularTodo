using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TodoApp.Application.Contracts.Core.Dtos.Requests;

namespace TodoApp.Application.Contracts.TodoItems.Dtos.Request
{
   public class GetTodoItemsRequest : PagedAndSorted
    {

        public string FilterText { get; set; }
        //public string Title { get; set; }
        //public string Description { get; set; }
        //public bool? Done { get; set; }
        //public Guid? GategoryId { get; set; }
    }
}
