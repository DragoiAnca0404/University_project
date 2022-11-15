import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { AppRoutingModule } from '../app-routing.module';
import { MapComponent } from './map/map.component';
import { GradesComponent } from './grades/grades.component';
import { AddGradesComponent } from '../add-grade-page/select-subject-teacher/add-grades.component';
import { DisplayGradesComponent } from '../add-grade-page/display-and-add-grades/display-grades.component';
import { FooterComponent } from '../first-page/footer/footer.component';
import { HeaderComponent } from '../first-page/header/header.component';
import { NavigationComponent } from '../first-page/navigation/navigation.component';
import { MainPageComponent } from './main-page/main-page.component';



@NgModule({
  declarations: [
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    MapComponent,
    AddGradesComponent,
    GradesComponent,
    DisplayGradesComponent,
    MainPageComponent
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
