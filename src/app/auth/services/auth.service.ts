import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import { environment } from '../../../environments/environment';
import { AuthResponse, RefreshTokenResponse } from '../interfaces/auth-response.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _apiURL: string = environment.apiURL;
  // no uso esta propiedad porque en el refresh token no viene de nuevo el usuario, por eso opte por guardar en localstorage
  // private _user!: string;

  get user() {
    // return this._user;
    return localStorage.getItem('user');
  };

  constructor( private http: HttpClient ) { }


  signIn( usuario: string, contrasenia: string ) {

    const body = { usuario, contrasenia };

    return this.http.post<AuthResponse>(`${this._apiURL}/auth/signin`, body)
                .pipe(
                  tap( resp => {
                    if (resp.code === 201) {
                      localStorage.setItem('token', resp.auth_token);
                      localStorage.setItem('refresh-token', resp.refresh_token);
                      localStorage.setItem('user', resp.user);
                      // this._user = resp.user;
                    } else {
                      localStorage.clear();
                    }
                  }),
                  map( resp => resp.code),
                  catchError( error => of(error.error.message))
                )
  };


  validateToken() {
    // el endpoint recibe el body de esta manera
    const body = {
      'refresh_token': localStorage.getItem('refresh-token')
    };

    return this.http.post<RefreshTokenResponse>(`${this._apiURL}/auth/refresh-token`, body)
                .pipe(
                  map( resp => {
                    localStorage.setItem('token', resp.token);
                    return true;
                  }),
                  catchError( error => of(false))
                )
  };

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('refresh-token');
  };

}
