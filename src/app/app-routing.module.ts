// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';

// const routes: Routes = [];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule],
//   providers: []
// })
// export class Ng2MaterialRoutingModule { }

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';


import { ChildComponent } from './child/child.component';
import { RoleComponent } from './role/role.component';
import { Angular2NotificationComponent } from './angular2-notification/angular2-notification.component';

const homeRoutes : Routes = [
      { path: '', redirectTo:'',pathMatch:'full' },
      { path: 'child', component: ChildComponent },  
      { path: 'role/add', component: RoleComponent },
      { path: 'Angular2-notification', component: Angular2NotificationComponent },

]

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '', component: HomeComponent ,children: homeRoutes},
  { path:'login', component: LoginComponent}, 
  { path: '**', redirectTo:'login'}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes)
