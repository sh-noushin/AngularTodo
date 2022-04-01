using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TodoApp.Domain.Shared.Users;

namespace TodoApp.Domain.Users.Exceptions
{
    public class UserPasswordLengthException:Exception
    {

        public UserPasswordLengthException()
            : base($"Password length must be at least {UserConsts.PasswordMinLength} charachters.")
        {

        }
    }
}
