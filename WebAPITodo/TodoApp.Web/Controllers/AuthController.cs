using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using TodoApp.Application.Contracts.Auth;
using TodoApp.Application.Contracts.Auth.Dtos.Request;
using TodoApp.Application.Contracts.Auth.Dtos.Response;

namespace TodoApp.Web.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly IAuthService _service;

        public AuthController(IAuthService service)
        {
            _service = service;
        }

        [HttpPost]
    [TodoAuthorizecs()]

    public Task<TokenResponse> LoginAsync(LoginRequestInput input)
        {
            return _service.LoginAsync(input);
        }

    [HttpGet]
    [Route("test")]
    public string Test()
    {
      string x = "helllloooooo";
      return x;
    }

  }
}
