using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TodoApp.Application.Contracts.Core.Dtos.Requests
{
    public interface IPagedRequest
    {
         int SkipCount { get; set; }
         int MaxReasultCount { get; set; }
    }
}
