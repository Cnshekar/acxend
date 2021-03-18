using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;


namespace WebApi.Controllers
{
    public class CSVController : Controller
    {
        // (CSV/SaveData)
        public ActionResult SaveData([FromBody] StudentViewModel student)
        {
            if (!ModelState.IsValid)
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);

            using (var ctx = new SchoolDBEntities())
            {
                ctx.Students.Add(new Student()
                {
                    StudentID = student.Id,
                    Name = student.Name,
                    Age = student.Age,
                    City = student.City
                });

                ctx.SaveChanges();
            }


            return new HttpStatusCodeResult(HttpStatusCode.OK, "Successfully Stored");

        }
    }
}
