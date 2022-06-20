using Microsoft.EntityFrameworkCore;
using DummyModels;

namespace DummyData {
    public class DummyDataContext: DbContext
    {
        public DummyDataContext(DbContextOptions<DummyDataContext> options) : base(options)
        {

        }
        public DbSet<User> Users {get;set;}
    }
}