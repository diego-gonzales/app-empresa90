import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ProductsResponse } from '../../interfaces/products-response.interface';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  products: ProductsResponse[] = [];

  constructor( private productsService: ProductsService ) { }

  ngOnInit(): void {
    this.productsService.getProducts()
        .subscribe( resp => {
          this.products = resp;
          console.log(this.products);
        });
  };

}
