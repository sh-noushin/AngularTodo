using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using System.Web.Http.Controllers;
using System.Web.Http.Filters;

namespace TodoApp.Web
{
  public sealed class TodoAuthorizecs :  System.Web.Http.AuthorizeAttribute
  {


    public TodoAuthorizecs()
    {
      
        }

    public override void OnAuthorization(HttpActionContext actionContext)
    {

      if (!IsAuthorized(actionContext))
      {
        HandleUnauthorizedRequest(actionContext);
      }
    }

    protected override bool IsAuthorized(HttpActionContext context)
    {
      if (TodoMiddleware.x == null)
        return true;
      else return true;
    }
  }
}
