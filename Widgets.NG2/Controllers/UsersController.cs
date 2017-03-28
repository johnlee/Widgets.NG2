using System;
using System.Collections.Generic;
using System.Web.Http;
using Widgets.NG2.Models;

namespace Widgets.NG2.Controllers
{
    public class UsersController : ApiController
    {
        private Random r = new Random(DateTime.Now.Millisecond);

        public List<User> Get()
        {
            List<User> users = new List<User>();
            for (int i = 1; i <= 10; i++)
            {
                users.Add(new User(i, r));
            }
            return users;
        }

        public User Get(int id)
        {
            return new User(id, r);
        }
    }
}
