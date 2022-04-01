namespace TodoApp.EntityFrameworkCore.Core
{
    internal class PaginationFilter
    {
        private object pageNumber;
        private object pageSize;

        public PaginationFilter(object pageNumber, object pageSize)
        {
            this.pageNumber = pageNumber;
            this.pageSize = pageSize;
        }
    }
}