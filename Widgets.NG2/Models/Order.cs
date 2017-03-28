using System;
using System.Collections.Generic;

namespace Widgets.NG2.Models
{
    public class Order
    {
        private List<string> _userNames = new List<string> { "Alex", "Brad", "Chris", "Dave", "Edward",
            "Frank", "George", "Adams", "Bourne", "Common", "Dolly", "Edison", "Fuller", "Graham" };
        private List<string> _productNames = new List<string> {
            "Ullamcorper",
            "Turpis Idicus",
            "Diam Varius",
            "Nonfeugiat",
            "Ipsum Sollicitudin",
            "Proin Laoreet",
            "Egestas Dolor",
            "Proin dictum ex",
            "Vel risus viverra",
            "Ullamcorper Vivamus",
            "Malesuada fermentum",
            "Egestas Duis Viverra",
            "Quam luctus",
            "Eleifend sapien auctor",
            "Sagittis odio",
            "Morbi sed orci",
            "Gut mi aliquam",
            "Convallis",
            "Nunc velit ligula",
            "Pretium nec posuere",
            "Interdum id quam",
            "Vestibulum sit",
            "Amet tellus",
            "Atmagna tincidunt fermentum"};

        public Order(int id, Random r)
        {
            this.Id = id;
            this.User = _userNames[r.Next(13)];
            this.Product = _productNames[r.Next(22)];
            this.Quantity = r.Next(99);
            this.TotalPrice = r.Next(100, 5000);
        }

        public int Id { get; set; }
        public string User { get; set; }
        public string Product { get; set; }
        public int Quantity { get; set; }
        public decimal TotalPrice { get; set; }
    }
}