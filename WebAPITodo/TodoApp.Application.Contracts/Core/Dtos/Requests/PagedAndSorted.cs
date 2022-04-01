using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TodoApp.Application.Contracts.Core.Dtos.Requests
{
    public class PagedAndSorted : IPagedRequest, ISortedRequest
    {
        [Range(0, int.MaxValue)]
        public int SkipCount { get; set; } = 0;
        [Range(1, int.MaxValue)]
        public int MaxReasultCount { get; set; } = 10;
        public string Sorting { get ; set ; }
    }
}
