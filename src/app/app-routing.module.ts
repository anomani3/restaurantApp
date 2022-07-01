import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddRestroComponent} from './add-restro/add-restro.component';
import {UpdateRestroComponent} from './update-restro/update-restro.component';
import {LoginComponent} from './login/login.component'
import {RegisterComponent} from './register/register.component';
import {ListRestroComponent} from './list-restro/list-restro.component';
import {DeleteComponent} from './delete/delete.component';



const routes: Routes = [
  {
    component:AddRestroComponent,
    path:'add'
  },
  {
    component:UpdateRestroComponent,
    path:'update/:id'
  },
  {
    component:DeleteComponent,
    path:'delete'
  },
  {
    component:LoginComponent,
    path:'login'
  },
  {
    component:RegisterComponent,
    path:'register'
  },
  {
    component:ListRestroComponent,
    path:'list'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
