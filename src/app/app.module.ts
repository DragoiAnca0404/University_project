import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainModule } from './main/main.module';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';
import { DetailsComponent } from './details/details.component';
import { HeroDetailComponent } from './add-grade-page/hero-detail/hero-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    HeroDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    MainModule,
    BrowserAnimationsModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
