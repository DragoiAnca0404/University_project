import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './main/login/login.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { MapComponent } from './main/map/map.component';
import { DetailsComponent } from './details/details.component';
import { MainPageComponent } from './main/main-page/main-page.component';
import { UserIsLoginGuard } from './shared/guards/user-is-login.guard';
import { GradeDetailComponent } from './student/components/grade-detail/grade-detail.component';
import { GradesSubjectTableComponent } from './student/components/grades-subject-table/grades-subject-table.component';
import { DisplayGradesComponent } from './teacher/components/display-and-add-grades/display-grades.component';
import { AddGradesComponent } from './teacher/components/select-subject-teacher/add-grades.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [UserIsLoginGuard]
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
  {
    path:'display-grades/:denumire_materie',
    component: GradesSubjectTableComponent
  },
  {
    path:'grade-detail',
    component: GradeDetailComponent
  },
  { path : '', redirectTo:'/login', pathMatch : 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DisplayGradesComponent, AddGradesComponent]
