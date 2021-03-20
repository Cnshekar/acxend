using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Mvc;
using WebApi.Models;

namespace WebApi.Controllers
{
    public class CSVController : Controller
    {
        private acxendEntities db = new acxendEntities();
        // [CSV/SaveData]
        [EnableCors(origins: "http://localhost:4200/", headers: "*", methods: "*")]
        public ActionResult SaveData([FromBody] List<Student> student)
        {
            if (!ModelState.IsValid)
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);

            using (var ctx = new acxendEntities())
            {
                ctx.Students.Add(new Student()
                {
                    //name = student,
                    //age = student.age,
                    //city = student.city
                });

                ctx.SaveChanges();
            }


            return new HttpStatusCodeResult(HttpStatusCode.OK, "Successfully Stored");

        }
    }
}
