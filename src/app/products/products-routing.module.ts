import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './pages/all-products/all-products.component';
import { DetailProductComponent } from './pages/detail-product/detail-product.component';
import { NewProductComponent } from './pages/new-product/new-product.component';
import { MainProductsComponent } from './pages/main-products/main-products.component';

const routes: Routes = [
  {
    path: '',
    component: MainProductsComponent,
    children: [
      {
        path: 'all',
        component: AllProductsComponent
      },
      {
        path: 'detail/:id',
        component: DetailProductComponent
      },
      {
        path: 'new',
        component: NewProductComponent
      },
      {
        path: 'edit/:id',
        component: NewProductComponent
      },
      {
        path: '**',
        redirectTo: 'all'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
