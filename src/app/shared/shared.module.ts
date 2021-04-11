import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MainPageComponent } from './main-page/main-page.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    MainPageComponent
  ],
  imports: [
    RouterModule,
    MaterialModule
  ],
  exports: [
    MainPageComponent
  ]
})
export class SharedModule { }
