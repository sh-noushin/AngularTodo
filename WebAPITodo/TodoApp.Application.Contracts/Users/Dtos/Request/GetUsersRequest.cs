using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TodoApp.Application.Contracts.Core.Dtos.Requests;

namespace TodoApp.Application.Contracts.Users.Dtos.Request
{
    public class GetUsersRequest : PagedAndSorted
    {
    
        public string FilterText { get; set; }
    }
}
