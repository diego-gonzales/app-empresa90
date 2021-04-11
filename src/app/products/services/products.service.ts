import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { ProductsResponse } from '../interfaces/products-response.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private _apiURL: string = environment.apiURL;

  constructor( private http: HttpClient) { }

  getProducts(): Observable<ProductsResponse[]> {
    return this.http.get<ProductsResponse[]>(`${this._apiURL}/products`);
  };

  getProductById( idProducto: string ): Observable<ProductsResponse> {
    return this.http.get<any>(`${this._apiURL}/products/${idProducto}`)
                .pipe(
                  map( resp => resp.result[0] )
                )
  };

  postProduct( product: ProductsResponse ) {
    return this.http.post(`${this._apiURL}/products`, product);
  };

  putProduct( product: ProductsResponse ) {
    return this.http.put(`${this._apiURL}/products/${product.IDPRODUCTO}`, product);
  };

}
