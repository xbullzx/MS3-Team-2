import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing/app-routing';
import { RouterModule, Routes } from '@angular/router';

import { HomeListComponent } from './home-list/home-list.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { AboutComponent } from './about/about.component';
import { FrameworkComponent } from './framework/framework.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LocationDetailsComponent } from './location-details/location-details.component';
import { RegisterComponent } from './register/register.component'
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { LocationInfoComponent } from './location-info/location-info.component';
import { LocationsManagementComponent } from './locations-management/locations-management.component';
import { MostRecentFirstPipe } from './most-recent-first.pipe';
import { RatingStarsComponent } from './rating-stars/rating-stars.component';
import { HtmlLineBreaksPipe }  from './html-line-breaks.pipe';

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
    FooterComponent,
    LocationInfoComponent,
    LocationsManagementComponent,
    MostRecentFirstPipe,
    RatingStarsComponent,
    HtmlLineBreaksPipe
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [FrameworkComponent]
})
export class AppModule { }
