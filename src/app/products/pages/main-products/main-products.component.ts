import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../../auth/services/auth.service';
import { User } from '../../../auth/interfaces/user.interface';

@Component({
  selector: 'app-main-products',
  templateUrl: './main-products.component.html',
  styleUrls: ['./main-products.component.css']
})
export class MainProductsComponent implements OnInit {

  user!: string;

  constructor( private authService: AuthService,
               private router: Router ) { }

  ngOnInit(): void {
    this.user = this.authService.user || '';
    this.authService.validateToken()
    .subscribe(resp => console.log(resp))
  };


  logout() {
    this.authService.logout();
    this.router.navigate(['/auth']);
  };

}
