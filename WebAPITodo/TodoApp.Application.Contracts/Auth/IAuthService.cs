using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TodoApp.Application.Contracts.Auth.Dtos.Request;
using TodoApp.Application.Contracts.Auth.Dtos.Response;

namespace TodoApp.Application.Contracts.Auth
{
    public interface IAuthService
    {
        Task<TokenResponse> LoginAsync(LoginRequestInput input);
    }
}
