import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from '../about/about.component';
import { HomepageComponent } from '../homepage/homepage.component';
import { LocationDetailsComponent } from '../location-details/location-details.component';
import { RegisterComponent } from '../register/register.component';
import { LoginComponent } from '../login/login.component';
import { LocationsManagementComponent } from '../locations-management/locations-management.component';
import { LocationInfoComponent } from '../location-info/location-info.component'


const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
{
    path: 'location/:locationId',
    component: LocationDetailsComponent
 },
 {
   path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'admin',
    component: LocationsManagementComponent,
  },
  {
    path: 'admin/newLocation',
    component: LocationInfoComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
