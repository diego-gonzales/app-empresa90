import { Component, Input, OnInit } from '@angular/core';
import { ProductsResponse } from '../../interfaces/products-response.interface';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductComponent implements OnInit {

  @Input() product!: ProductsResponse;

  constructor() { }

  ngOnInit(): void {
  }

}
