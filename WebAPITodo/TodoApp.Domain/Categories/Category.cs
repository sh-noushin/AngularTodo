using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TodoApp.Domain.Categories.Exceotions;
using TodoApp.Domain.Core;
using TodoApp.Domain.Shared.Categories;

namespace TodoApp.Domain.Categories
{
    public class Category : BaseEntity<Guid>
    {
        public string Name { get; private set; }

        private Category()
        {

        }


        public Category(string name)
        {
            SetName(name);
        }

        public void SetName(string name)
        {
            if(name.Length > CategoryConsts.NameMaxLength)
            {
                throw new CategoryNameLengthException();
            }
            Name = name;        }
    }
}
