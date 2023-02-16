import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MovieComponent } from './movie/movie.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path:"login", component:LoginComponent},
  {path:"movies", component:MovieComponent},
  {path:"dashboard", component:DashboardComponent},
  {path:"**", redirectTo:"dashboard", pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }