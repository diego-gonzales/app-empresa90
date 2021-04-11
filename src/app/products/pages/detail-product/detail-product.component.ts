import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { ProductsService } from '../../services/products.service';
import { ProductsResponse } from '../../interfaces/products-response.interface';


@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {

  product!: ProductsResponse;

  constructor( private activatedRoute: ActivatedRoute,
               private productService: ProductsService ) { }

  ngOnInit(): void {
    this.activatedRoute.params
        .pipe(
          switchMap( params => this.productService.getProductById(params.id) )
        ).subscribe( resp => this.product = resp )
  };


  back() {
    window.history.back();
  };

}
