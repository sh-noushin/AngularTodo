using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TodoApp.Domain.Categories.Exceotions
{
   public class CategoryAlreadyExistsException : Exception
    {
        public CategoryAlreadyExistsException(string name)
            :base($"Category with name {name} already exists")
            {

        }

    }
}
