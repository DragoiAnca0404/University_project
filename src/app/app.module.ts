import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainModule } from './main/main.module';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';
import { DetailsComponent } from './details/details.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { UserIsLoginGuard } from './shared/guards/user-is-login.guard';
import {NgToastModule} from 'ng-angular-popup';

@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,

     ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    MainModule,
    BrowserAnimationsModule,
    FormsModule,
    NgToastModule
  ],
  providers: [AuthGuard, UserIsLoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
