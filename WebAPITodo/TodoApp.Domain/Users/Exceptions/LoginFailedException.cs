using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TodoApp.Domain.Users.Exceptions
{
    public class LoginFailedException : Exception
    {
        public LoginFailedException()
            : base("Invlid username or password")
        {

        }
    }
}
