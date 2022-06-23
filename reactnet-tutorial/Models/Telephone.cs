using System;
using System.Collections.Generic;

namespace reactnet_tutorial.Models
{
    public partial class Telephone
    {
        public int Id { get; set; }
        public string PhoneNumber { get; set; }
        public int UserId { get; set; }
        public bool IsActive { get; set; }
    }
}
