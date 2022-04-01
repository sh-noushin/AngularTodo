using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TodoApp.Application.Contracts.Core.Dtos.Responses;
using TodoApp.Application.Contracts.Users.Dtos.Request;
using TodoApp.Application.Contracts.Users.Dtos.Response;

namespace TodoApp.Application.Contracts.Users
{
    public interface IMyUserService
    {

        Task CreateAsync(UserCreateRequest input);
        Task UpdateAsync(Guid id, UserUpdateRequest input);
        Task DeleteAsync(Guid id);
        Task<PagedResultResponse<UserResponse>> GettAllAsync(GetUsersRequest filter);
        Task<UserResponse> GetByIdAsync(Guid id);
    }
}
