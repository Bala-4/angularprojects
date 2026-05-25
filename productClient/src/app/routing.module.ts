import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { CreateComponent } from './components/create-component/create-component';
import { GetComponent } from './components/get-component/get-component';
import { DeleteComponent } from './components/delete-component/delete-component';
import { UpdateComponent } from './components/update-component/update-component';
const routes:Routes=[
    {path:'',redirectTo:'',pathMatch:'full'},
    {path:'create',component:CreateComponent},
    {path:'get',component:GetComponent},
    {path:'update',component:UpdateComponent},
    {path:'delete',component:DeleteComponent}
];
@NgModule({
  imports:[RouterModule.forRoot(routes)], // forRoot is used for the main routing module of the application. It sets up the router with a set of routes and returns a module that contains the configured router service providers and directives needed for routing.
  exports:[RouterModule]
})
export class AppRouterModule{}