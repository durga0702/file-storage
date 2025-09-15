import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { MyfilesComponent } from './myfiles/myfiles.component';

const routes: Routes = [
  {path:'dashboard', component:DashboardComponent},
  {path:'', redirectTo:'/dashboard', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'myfiles', component:MyfilesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
