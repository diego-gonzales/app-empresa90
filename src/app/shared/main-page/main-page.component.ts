import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  isLoggedIn: boolean = true;

  constructor( private router: Router ) { }

  ngOnInit( ): void {
    (localStorage.getItem('refresh-token'))
          ? this.isLoggedIn = false
          : this.isLoggedIn = true;
  }


  goToProductList() {
    (localStorage.getItem('refresh-token'))
        ? this.router.navigateByUrl('/products')
        : this.router.navigateByUrl('/auth');
  };
}
