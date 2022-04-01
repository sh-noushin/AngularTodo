using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TodoApp.Domain.Users.Exceptions
{
    public class UserNotFoundException : Exception
    {
        public UserNotFoundException(string username)
            : base($"User with UserName {username} not found.")
        {

        }
        public UserNotFoundException(Guid id)
            : base($"User with id {id} not found.")
        {

        }
    }
}
