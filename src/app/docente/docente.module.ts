import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocenteRoutingModule } from './docente-routing.module';
import { DocenteComponent } from './docente.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [DocenteComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DocenteRoutingModule,
  ],
  providers: [ ],
})
export class DocenteModule { }
