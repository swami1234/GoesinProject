using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.ComponentModel.DataAnnotations;
using System.Threading.Tasks;

using System.Web.Configuration;
using System.Net.Mail;

namespace GoesinProject.Controllers
{
    public class HomeController : Controller
    {
     
        public ActionResult Index()
        {
            return View();
        }

      
        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
       

        public ActionResult Newproject()
        {


            return View();
        }

        public ActionResult SinglePost()
        {
            return View();
        }
    }
}
       