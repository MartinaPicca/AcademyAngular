import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CorsoComponent } from './corso/corso.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  {
    path:'',
    component: HomeComponent
  },
    { path: '',
    // component: NavbarComponent,
  
    children: [
      {
        path: 'docente',
        loadChildren: () =>
          import('./docente/docente.module').then((m) => m.DocenteModule)
      },
      {
        path: 'corso',
        loadChildren: () =>
          import('./corso/corso.module').then((m) => m.CorsoModule)
      },
 
      
    ]
    },
    // {
    //   path: 'corso',
    //   component: CorsoComponent
    // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
