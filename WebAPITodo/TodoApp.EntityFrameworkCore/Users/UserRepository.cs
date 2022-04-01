using System;
using System.Linq;
using System.Threading.Tasks;
using TodoApp.Domain.Users;
using TodoApp.EntityFrameworkCore.Core;
using TodoApp.Domain.Core.Extensions;
using System.Linq.Dynamic.Core;

using Microsoft.EntityFrameworkCore;
using TodoApp.Domain.Shared.Users;
using System.Collections.Generic;
using TodoApp.Domain.Core.Exceptions;
using TodoApp.Domain.Users.Entities;

namespace TodoApp.EntityFrameworkCore.Users
{
    public class UserRepository : BaseRepository<TodoAppDbContext, User, Guid>, IUserRepository
    {
        public UserRepository(TodoAppDbContext db) :
           base(db)
        {
        }
        protected IQueryable<User> ApplyFilter(IQueryable<User> query, string username)
        {
            return query.WhereIf(!string.IsNullOrEmpty(username), x => x.UserName.ToLower().Contains(username.ToLower()));

        }
        public async Task<long> GetCountAsync(string filterText)
        {
            var query = await QueryableAsync();
            query = ApplyFilter(query, filterText);

            return await query.CountAsync();
        }

        public async Task<List<User>> GetAllAsync(string filterText, string sorting = null, int skipCount = 0, int maxResultCount = 10)
        {
            var query = await QueryableAsync();
            query = ApplyFilter(query, filterText)
                .OrderBy(!string.IsNullOrEmpty(sorting) ? sorting : UserConsts.DefaultSorting)
                .PageBy(skipCount, maxResultCount);

            return await query.ToListAsync();
        }

        public async Task<User> GetByUsername(string username)
        {
            var model = await Db.Set<User>().FirstAsync(x => x.UserName == username);
            if (model == null)
            {
                throw new EntityNotFoundException();
            }
            return model;
        }

        public async Task CreateTokenAsync(Token token)
        {
            await Db.Set<Token>().AddAsync(token);
            await Db.SaveChangesAsync();
        }

        public async Task DeleteTokenByUserIdAsync(Guid userId)
        {
            var token = await Db.Set<Token>().FirstOrDefaultAsync(x=>x.UserId == userId);
            if(token != null)
            {
                Db.Set<Token>().Remove(token);
                await Db.SaveChangesAsync();
            }
            
        }

        public Task<bool> HasTokenAsync(Guid userId)
        {
            return Db.Tokens.AnyAsync(x => x.UserId == userId);
        }
    }
}
