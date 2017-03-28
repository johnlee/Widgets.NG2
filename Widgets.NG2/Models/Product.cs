using System;
using System.Collections.Generic;

namespace Widgets.NG2.Models
{
    public class Product
    {
        private List<string> _names = new List<string> {
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

        public Product(int id, Random r)
        {
            this.Id = id;
            this.Name = _names[r.Next(22)];
            this.Description = _names[r.Next(22)];
            this.Type = _names[r.Next(22)];
            this.Price = r.Next(1, 1000);
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Type { get; set; }
        public decimal Price { get; set; }
    }
}