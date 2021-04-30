import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValidateLoginGuard implements CanActivate, CanLoad {

  constructor( private router: Router) { }


  // Esto no ayuda a evitar que el usuario vea la pantalla de login una vez que se loguea
  canActivate(): Observable<boolean> | boolean {
    if (localStorage.getItem('token')) {
      this.router.navigateByUrl('/products');
      return false;
    };
    
    return true;
  };

  // Este creo que no es necesario porque el auth modulo ya esta cargado (no se esta usando en ninguna ruta)
  canLoad(): Observable<boolean> | boolean {
    return true;
  }
}
