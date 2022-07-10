import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { AppRoutingModule } from '../app-routing.module';
import { MapComponent } from './map/map.component';
import { GradesComponent } from './grades/grades.component';
import { DisplayGradesComponent } from './display-grades-teacher/display-grades.component';
import { AddFormGradeComponent } from './add-form-grade/add-form-grade.component';
import { AddGradesComponent } from '../add-grade-page/add-grades-teacher/add-grades.component';



@NgModule({
  declarations: [
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    MainPageComponent,
    NavigationComponent,
    MapComponent,
    AddGradesComponent,
    GradesComponent,
    DisplayGradesComponent,
    AddFormGradeComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    SharedModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,

  ],
  exports: [HeaderComponent, FooterComponent, NavigationComponent]
})
export class MainModule { }
