using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using TodoApp.Domain.Core;
using TodoApp.Domain.Users;
using TodoApp.Domain.Users.Entities;

namespace TodoApp.Domain.Users
{
    public interface IUserRepository : IBaseRepository<User, Guid>
    {
        public Task<long> GetCountAsync(string filterText);
        public Task<List<User>> GetAllAsync(string filterText, string sorting, int skipCount = 0, int maxResultCount = 10);
        Task<User> GetByUsername(string username);
        Task CreateTokenAsync(Token token);
        Task DeleteTokenByUserIdAsync(Guid userId);
        Task<bool> HasTokenAsync(Guid userId);
    }
}
