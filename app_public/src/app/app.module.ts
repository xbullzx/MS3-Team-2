import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing/app-routing';
import { PageHeaderComponent } from './page-header/page-header.component';
import { HomeListComponent } from './home-list/home-list.component';
import { AboutComponent } from './about/about.component';
import { FrameworkComponent } from './framework/framework.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LocationDetailsComponent } from './location-details/location-details.component';
import { RegisterComponent } from './register/register.component'
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [

    HomeListComponent,
    AboutComponent,
    FrameworkComponent,
    HomepageComponent,
    PageHeaderComponent,
    LocationDetailsComponent,
    RegisterComponent,
    LoginComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [FrameworkComponent]
})
export class AppModule { }
