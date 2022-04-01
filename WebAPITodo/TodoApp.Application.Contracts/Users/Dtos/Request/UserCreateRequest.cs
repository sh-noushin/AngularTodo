using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TodoApp.Application.Contracts.Users.Dtos.Request
{
    public class UserCreateRequest
    {
        public string UserName { get; set; }
        public string Password { get; set; }

    }
}
