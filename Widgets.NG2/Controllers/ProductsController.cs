using System;
using System.Collections.Generic;
using System.Web.Http;
using Widgets.NG2.Models;

namespace Widgets.NG2.Controllers
{
    public class ProductsController : ApiController
    {
        private Random r = new Random(DateTime.Now.Millisecond);

        public List<Product> Get()
        {
            List<Product> products = new List<Product>();
            for (int i = 1; i <= 10; i++)
            {
                products.Add(new Product(i, r));
            }
            return products;
        }
        
        public Product Get(int id)
        {
            return new Product(id, r);
        }
    }
}
