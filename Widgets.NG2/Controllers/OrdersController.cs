using System;
using System.Collections.Generic;
using System.Web.Http;
using Widgets.NG2.Models;

namespace Widgets.NG2.Controllers
{
    public class OrdersController : ApiController
    {
        private Random r = new Random(DateTime.Now.Millisecond);

        public List<Order> Get()
        {
            List<Order> orders = new List<Order>();

            for (int i = 1; i <= 10; i++)
            {
                orders.Add(new Order(i, r));
            }
            return orders;
        }
        
        public Order Get(int id)
        {
            return new Order(id, r);
        }
    }
}
