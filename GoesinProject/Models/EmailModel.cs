﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace GoesinProject.Models
{
    
        public class EmailModel
        {
            [Required, Display(Name = "Name")]
            public string FromName { get; set; }

            [Required, Display(Name = "Email"), EmailAddress]
            public string FromEmail { get; set; }

            

            public string Message { get; set; }
        }

    
}