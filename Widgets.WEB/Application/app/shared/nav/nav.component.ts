import { Component, OnInit } from '@angular/core';

class MenuItem {
  constructor(public caption: string, public link: any[]) { }
}

@Component({
  selector: 'app-nav',
  templateUrl: 'nav.component.html'
})
export class NavComponent implements OnInit {
  menuItems: MenuItem[];

  ngOnInit() {
    this.menuItems = [
      { caption: 'Dashboard', link: ['/dashboard'] },
      { caption: 'Products', link: ['/products'] },
      { caption: 'Users', link: ['/users'] },
      { caption: 'Orders', link: ['/orders'] }
    ];
  }

  constructor() { }

}
