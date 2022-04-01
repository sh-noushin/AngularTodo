using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TodoApp.Application.Contracts.TodoItems.Dtos.Response;
using TodoApp.Domain.TodoItems;

namespace TodoApp.Application.TodoItems
{
   public class TodoItemsMappingProfile: Profile
    {
        public TodoItemsMappingProfile()
        {
            CreateMap<TodoItem , TodoItemResponse>();
        }
    }
}
