using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using DummyModels;
using DummyData;

namespace reactnet_tutorial.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class DummyDataController : ControllerBase
    {

        private readonly ILogger<DummyDataController> _logger;
        private readonly DummyDataContext _context;

        public DummyDataController(ILogger<DummyDataController> logger, DummyDataContext context)
        {
            _logger = logger;
            _context = context;
        }

        [HttpGet]
        public IEnumerable<User> Get()
        {
            return _context.Users.ToList();
        }
    }
}
