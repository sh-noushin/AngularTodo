using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TodoApp.Domain.Categories.Exceotions
{
    public class CategoryNotFoundException:Exception
    {
        public CategoryNotFoundException(string name)
            :base($"Category with name {name} not found.")
        {

        }
        public CategoryNotFoundException(Guid id)
            : base($"Category with id {id} not found.")
        {

        }
    }
}
