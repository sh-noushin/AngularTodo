using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TodoApp.Domain.Users.Entities;

namespace TodoApp.Domain.Users
{
    public class UserManager
    {
        private readonly IUserRepository _userRepository;

        public UserManager(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public Task<User> CreateAsyn(string username, string password)
        {
            var user = new User(username, password);
            return Task.FromResult(user);
        }

        public async Task<bool> LoginAsync(string username, string pasword)
        {
            if(!await _userRepository.AnyAsync(x=>x.UserName == username && x.Password == pasword))
            {
                throw new Exception("Invalid username or password");
            }
            return true;
        }

        public async Task<Token> GenerateTokenAsync(User user)
        {
            var token = new Token(Guid.NewGuid(), Guid.NewGuid(), user.Id);

            if(await _userRepository.HasTokenAsync(user.Id))
            {
                await _userRepository.DeleteTokenByUserIdAsync(user.Id);
            }
            await _userRepository.CreateTokenAsync(token);
            return token;
        }
    }
}
