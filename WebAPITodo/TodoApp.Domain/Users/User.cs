using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TodoApp.Domain.Core;
using TodoApp.Domain.Shared.Users;
using TodoApp.Domain.Users.Entities;
using TodoApp.Domain.Users.Exceptions;

namespace TodoApp.Domain.Users

{
    public class User:BaseEntity<Guid>
    {
        public string UserName { get;private set; }
        public string Password { get;private set; }
        public Token Token { get; private set; }


        private User()
        {

        }


        public User(string username, string password)
        {
            SetName(username);
            SetPassword(password);
        }

        public void SetName(string username)
        {
            if (username.Length > UserConsts.UserNameMaxLength)
            {
                throw new UserNameLengthException();
            }
            UserName = username;
        }
        public void SetPassword(string password)
        {
            if (password.Length < UserConsts.PasswordMinLength)
            {
                throw new UserPasswordLengthException();
            }
            Password = password;
        }

        internal void SetToken(Token token)
        {
            if(token == null)
            {
                throw new NullReferenceException("Token cannot be null");
            }
            Token = token;
        }

    }
}
