using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TodoApp.Application.Contracts.Auth;
using TodoApp.Application.Contracts.Auth.Dtos.Request;
using TodoApp.Application.Contracts.Auth.Dtos.Response;
using TodoApp.Domain.Users;
using TodoApp.Domain.Users.Entities;

namespace TodoApp.Application.Auth
{
    public class AuthService : IAuthService
    {
        private readonly IUserRepository _repository;
        private readonly UserManager _userManager;

        public AuthService(IUserRepository repository, UserManager userManager)
        {
            _repository = repository;
            _userManager = userManager;
        }



        public async Task<TokenResponse> LoginAsync(LoginRequestInput input)
        {
            await _userManager.LoginAsync(input.Username, input.Password);
            var user = await _repository.GetByUsername(input.Username);
            var token = await _userManager.GenerateTokenAsync(user);
            return new TokenResponse
            {
                Value = token.Value,
                Username = input.Username,
                Password = input.Password 
            };
        }
    }
}
