using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TodoApp.Domain.Shared.Categories;

namespace TodoApp.Domain.Categories.Exceotions
{
   public class CategoryNameLengthException:Exception
    {
        public CategoryNameLengthException()
            : base($"Category name length exceeds {CategoryConsts.NameMaxLength} charachters.")
        {
            
        }
    }
}
