import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductsResponse } from '../../interfaces/products-response.interface';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styles: [
  ]
})
export class ConfirmComponent implements OnInit {

  constructor( @Inject(MAT_DIALOG_DATA) public data: ProductsResponse) { }

  ngOnInit(): void {
  }

}
