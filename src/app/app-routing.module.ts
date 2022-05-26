import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './main/login/login.component';
import { MainPageComponent } from './main/main-page/main-page.component';
import { DetailsComponent } from './main/details/details.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { MapComponent } from './main/map/map.component';
import { AddGradesComponent } from './main/add-grades/add-grades.component';
import { DisplayGradesComponent } from './main/display-grades/display-grades.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'main-page',
    component: MainPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'details',
    component: DetailsComponent
  },
  {
    path:'map',
    component: MapComponent
  },
  {
    path:'add-grades',
    component: AddGradesComponent
  },
  {
    path:'add-grades/:denumire_materie',
    component: DisplayGradesComponent
  },
  { path : '', redirectTo:'/login', pathMatch : 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DisplayGradesComponent, AddGradesComponent]
