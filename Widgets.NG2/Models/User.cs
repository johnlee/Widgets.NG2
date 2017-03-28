using System;
using System.Collections.Generic;

namespace Widgets.NG2.Models
{
    public class User
    {
        private List<string> _names = new List<string> { "Alex", "Brad", "Chris", "Dave", "Edward", 
            "Frank", "George", "Adams", "Bourne", "Common", "Dolly", "Edison", "Fuller", "Graham" };

        public User(int id, Random r)
        {
            this.Id = id;
            DateTime start = new DateTime(1995, 1, 1);
            int range = (DateTime.Today - start).Days;
            this.Name = _names[r.Next(13)];
            this.Created = start.AddDays(r.Next(range));
        }

        public int Id { get; set;  }
        public string Name { get; set; }
        public DateTime Created { get; set; }
    }
}