import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MainPageComponent } from './main-page/main-page.component';
import { MaterialModule } from '../material/material.module';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    MainPageComponent
  ]
})
export class SharedModule { }
