using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TodoApp.Application.Contracts.Core.Dtos.Requests
{
    public interface ISortedRequest
    {
         string Sorting { get; set; }
    }
}
