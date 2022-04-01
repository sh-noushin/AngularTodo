using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TodoApp.Application.Contracts.Categories.Dtos.Response;
using TodoApp.Domain.Categories;

namespace TodoApp.Application.Categories
{
   public class CategoriesMappingProfile: Profile
    {

        public CategoriesMappingProfile()
        {
            CreateMap<Category , CategoryResponse>();
            
        }
    }

    
}
