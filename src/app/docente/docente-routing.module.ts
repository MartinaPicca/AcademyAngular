import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocenteComponent } from './docente.component';

const routes: Routes = [
  {
    path:'',
    data:{
      title: 'Docente'
    },
    
    children: [
      {
        path:'',
        component: DocenteComponent,
        data: {
          title: '',
        } 
      },
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocenteRoutingModule { }
