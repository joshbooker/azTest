using System;
using Microsoft.AspNetCore.Mvc;

namespace AzTest.Controllers
{
    public partial class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
