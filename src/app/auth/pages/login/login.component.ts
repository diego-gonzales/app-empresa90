import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide: boolean = true;

  myForm: FormGroup = this.fb.group({
    user: [ '', Validators.required ],
    password: [ '', [Validators.required, Validators.minLength(5)] ]
  });


  constructor( private fb: FormBuilder,
               private authService: AuthService,
               private router: Router ) { }

  ngOnInit(): void {
  }

  fieldIsInvalid( controlName: string ) {
    return this.myForm.get(controlName)?.invalid && this.myForm.get(controlName)?.touched;
  };

  signIn() {

    const { user, password } = this.myForm.value;

    this.authService.signIn(user, password)
        .subscribe( resp => {
          if(resp === 201) {
            this.router.navigateByUrl('/products');
          } else {
            Swal.fire('Message', resp, 'info');
          }
        })
  };

}
