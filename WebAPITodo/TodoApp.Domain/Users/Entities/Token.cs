using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TodoApp.Domain.Core;
using TodoApp.Domain.Users;

namespace TodoApp.Domain.Users.Entities
{
    public class Token : BaseEntity<Guid>
    {
        public Guid UserId { get; set; }
        public Guid Value { get; set; }
        private Token()
        {

        }


        internal Token(Guid id, Guid value, Guid userId)
        {
            Id = id;
            Value = value;
            SetUserId(userId);
        }

        public void SetUserId(Guid userId)
        {
            UserId = userId;
        }
    }
}

