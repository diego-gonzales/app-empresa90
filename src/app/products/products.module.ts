import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '../material/material.module';


import { ProductsRoutingModule } from './products-routing.module';
import { MainProductsComponent } from './pages/main-products/main-products.component';
import { AllProductsComponent } from './pages/all-products/all-products.component';
import { DetailProductComponent } from './pages/detail-product/detail-product.component';
import { NewProductComponent } from './pages/new-product/new-product.component';
import { CardProductComponent } from './components/card-product/card-product.component';
import { NoImagePipe } from './pipes/no-image.pipe';
import { ConfirmComponent } from './components/confirm/confirm.component';


@NgModule({
  declarations: [
    MainProductsComponent,
    AllProductsComponent,
    DetailProductComponent,
    NewProductComponent,
    CardProductComponent,
    NoImagePipe,
    ConfirmComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MaterialModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
