import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CorsoRoutingModule } from './corso-routing.module';
import { CorsoComponent } from './corso.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [CorsoComponent],
  imports: [
    CommonModule,
    CorsoRoutingModule
  ]
})
export class CorsoModule { }
