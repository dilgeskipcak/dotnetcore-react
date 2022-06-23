using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using reactnet_tutorial.Models;

namespace reactnet_tutorial.Controllers
{
    [ApiController]
    [Route("dummydata")]
    public class DummyDataController : ControllerBase
    {

        private readonly ILogger<DummyDataController> _logger;
        private readonly DummyContext _context;

        public DummyDataController(ILogger<DummyDataController> logger, DummyContext context)
        {
            _logger = logger;
            _context = context;
        }

        [HttpGet("GetUsers")]
        public IEnumerable<User> GetUsers() => _context.Users.ToList();

        [HttpGet("GetTelephones")]
        public IEnumerable<Telephone> GetTelephones()
        {
            return _context.Telephones.ToList();
        }

        [HttpDelete("{id}")]
        public bool DeleteTelephone(int id)
        {
          try
          {
            _context.Telephones.Remove(new Telephone{ Id = id});
            return true;
          }
          catch (System.Exception)
          {
            
            return false;
          }
        }
        [HttpDelete("DeleteUser/{id}")]
        public bool DeleteUser(int id)
        {
          try
          {
            
            return true;
          }
          catch (System.Exception)
          {
            
            return false;
          }
        }
    }
}
