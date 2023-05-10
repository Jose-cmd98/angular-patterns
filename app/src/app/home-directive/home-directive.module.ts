import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeDirectiveRoutingModule } from './home-directive-routing.module';
import { HomeDirectiveComponent } from './home-directive/home-directive.component';


@NgModule({
  declarations: [
    HomeDirectiveComponent
  ],
  imports: [
    CommonModule,
    HomeDirectiveRoutingModule
  ]
})
export class HomeDirectiveModule { }
