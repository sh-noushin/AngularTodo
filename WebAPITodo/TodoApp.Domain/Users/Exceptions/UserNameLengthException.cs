using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TodoApp.Domain.Shared.Users;

namespace TodoApp.Domain.Users.Exceptions
{
    public class UserNameLengthException : Exception
    {
        public UserNameLengthException()
            : base($"UserName length exceeds {UserConsts.UserNameMaxLength} charachters.")
        {

        }
    }
}
