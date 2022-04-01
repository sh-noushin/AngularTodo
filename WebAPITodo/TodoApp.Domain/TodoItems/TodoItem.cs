using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TodoApp.Domain.Categories;
using TodoApp.Domain.Core;
using TodoApp.Domain.Shared.TodoItems;
using TodoApp.Domain.TodoItems.Exceptions;

namespace TodoApp.Domain.TodoItems
{
    public class TodoItem : BaseEntity<Guid>
    {
        private TodoItem()
        {

        }
        public TodoItem(string title, Guid categoryid )
        {
            SetTitle(title);
            CategoryId = categoryid;

        }
        public void SetTitle(string title)
        {
            if(title.Length > TodoItemConsts.MaxTitleMaxLength)
            {
                throw new TodoItemTitleLengthException();
            }
            Title = title;
        }
        public void SetCategoryid(Guid id)
        {
            CategoryId = id;
        }
        public string Title { get; private set; }
        public bool Done { get; set; }
        public Guid CategoryId { get; private set; }
        public virtual Category Category { get; set; }
        public string Description { get; set; }
    }
}
