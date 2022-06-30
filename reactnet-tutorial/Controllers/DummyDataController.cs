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

        [HttpDelete("DeleteTelephone/{id}")]
        public bool DeleteTelephone(int id)
        {
          try
          {
            _context.Telephones.Remove(new Telephone{ Id = id});
            _context.SaveChanges();
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
            _context.Users.Remove(new User{ Id = id});
            List<Telephone> telephones = _context.Telephones.Where(phone => phone.UserId == id).ToList();
            foreach (var item in telephones)
            {
              item.IsActive = false;
            }
            _context.SaveChanges();
            return true;
          }
          catch (System.Exception)
          {
            return false;
          }
        }

        [HttpPost("CreateUser")]
        [ValidateAntiForgeryToken]
        public IActionResult CreateUser(CreateUserRequest user)
        {
          if (user == null)
          {
            return BadRequest();
          }
          try
          {
            User newUser = new User
            {
              IdentityNumber = user.IdentityNumber,
              Name = user.Name,
              Surname = user.Surname,
              UserName = user.UserName,
              Password = user.Password,
            };
            _context.Users.Add(newUser);
            _context.SaveChanges();
            Telephone telephone = new Telephone
            {
              PhoneNumber = user.PhoneNumber,
              UserId = newUser.Id,
              IsActive = true
            };
            _context.Telephones.Add(telephone);
            _context.SaveChanges();
            return CreatedAtAction("ok",newUser.Id);
          }
          catch (Exception ex)
          {
            return BadRequest(error: ex);
          }
        }

        [HttpPost("UpdateUser")]
        [ValidateAntiForgeryToken]
        public IActionResult UpdateUser(CreateUserRequest request)
        {
          if (request == null)
          {
            return BadRequest();
          }
          try
          {
            User user = _context.Users.Where(u => u.Id == request.Id).FirstOrDefault();
            if (user == null)
            {
              return BadRequest("cannot find user");
            }
            user.IdentityNumber = request.IdentityNumber;
            user.Name = request.Name;
            user.Surname = request.Surname;
            user.UserName = request.UserName;
            user.Password = request.Password;
            _context.SaveChanges();
            Telephone telephone = _context.Telephones.Where(t => t.UserId == request.Id && t.IsActive).FirstOrDefault();
            try
            {
              if (telephone == null)
              {
                Telephone newTelephone = new Telephone
                {
                  PhoneNumber = request.PhoneNumber,
                  UserId = request.Id,
                  IsActive = true
                };
                _context.Telephones.Add(newTelephone);
              }
              else
              {
                telephone.PhoneNumber = request.PhoneNumber;
                telephone.UserId = request.Id;
                telephone.IsActive = true;
              }
            _context.SaveChanges();
            }
            catch (System.Exception ex)
            {
              return Ok(new { Message ="ok but failed at telephone update"});
            }
            
      
            return CreatedAtAction("ok",request.Id);
          }
          catch (Exception ex)
          {
            return BadRequest(error: ex);
          }
        }
    }
}
