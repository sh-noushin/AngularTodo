using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TodoApp.Application.Contracts.Core.Dtos.Requests;

namespace TodoApp.Application.Contracts.Categories.Dtos.Request
{
   public class GetCategoriesRequest: PagedAndSorted
    {
        public string FilterText { get; set; }
    }
}
