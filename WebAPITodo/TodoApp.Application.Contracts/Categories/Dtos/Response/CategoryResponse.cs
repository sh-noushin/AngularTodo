using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TodoApp.Application.Contracts.Categories.Dtos.Response
{
   public class CategoryResponse
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
    }
}
