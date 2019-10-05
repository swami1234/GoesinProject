using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.ComponentModel.DataAnnotations;
using System.Threading.Tasks;

using System.Web.Configuration;
using System.Net.Mail;
using GoesinProject.Models;

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

        [HttpPost]
        public async Task<ActionResult> ContactAsync(EmailModel model)
        {
            var from = WebConfigurationManager.AppSettings["emailfrom"];
            var to = from;
            from = $"{model.FromEmail}<{from}>";

            var emailMessage = new MailMessage(from, to)
            {
                Subject = "Contact Email sent from portfolio",
                Body = model.Message,
                IsBodyHtml = true
            };

            var svc = new PersonalEmail();

            await svc.SendAsync(emailMessage);

            return RedirectToAction("Index", "Home");
        }
    }
}
       