import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { ProductsResponse, DeleteProductResponse } from '../interfaces/products-response.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private _apiURL: string = environment.apiURL;
  // Ahora se necesita del header con el access token para acceder a las rutas del api
  private _headers = new HttpHeaders().set('x-access-token', localStorage.getItem('token') || '');

  constructor( private http: HttpClient) { }


  getProducts(): Observable<ProductsResponse[]> {
    return this.http.get<ProductsResponse[]>(`${this._apiURL}/products`, { headers: this._headers } );
  };

  getProductById( idProducto: string ): Observable<ProductsResponse> {
    return this.http.get<any>(`${this._apiURL}/products/${idProducto}`, { headers: this._headers })
                .pipe(
                  map( resp => resp.result[0] )
                );
  };

  postProduct( product: ProductsResponse ) {
    return this.http.post(`${this._apiURL}/products`, product, {headers: this._headers});
  };

  putProduct( product: ProductsResponse ) {
    return this.http.put(`${this._apiURL}/products/${product.IDPRODUCTO}`, product, { headers: this._headers });
  };

  deleteProduct( idProduct: number ): Observable<number> {
    return this.http.delete<DeleteProductResponse>(`${this._apiURL}/products/${idProduct}`, { headers: this._headers })
                .pipe(
                  map( resp => resp.code )
                );
  };

}
