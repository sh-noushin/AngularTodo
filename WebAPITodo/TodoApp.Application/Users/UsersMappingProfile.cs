using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TodoApp.Application.Contracts.Users.Dtos.Response;
using TodoApp.Domain.Users;

namespace TodoApp.Application.Users
{
    internal class UsersMappingProfile : Profile
    {

        public UsersMappingProfile()
        {
            CreateMap<User, UserResponse>();

        }
    }
}
