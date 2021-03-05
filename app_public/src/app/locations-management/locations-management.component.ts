import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { FidoDataService } from '../fido-data.service';
import { GeolocationService } from '../geolocation.service';
import { AuthenticationService } from '../authentication.service'
import { Location } from '../location';


@Component({
  selector: 'app-locations-management',
  templateUrl: './locations-management.component.html',
  styleUrls: ['./locations-management.component.css']
})
export class LocationsManagementComponent implements OnInit {

  constructor( 
    private fidoDataService: FidoDataService,
    private geolocationService: GeolocationService,
    private authenticationService: AuthenticationService,
    private router: Router
    ) {}

  public locations: Location[]
  public message: string

  private getLocations (position:any):void{
    this.message='searching for nearby places';
    const lat: number=position.coords.latitude
    const lng: number=position.coords.longitude
    this.fidoDataService.getLocations(lat, lng)
    .then (foundLocations => {
      this.message=foundLocations.length>0 ? "" : 'no locations found';
      this.locations = foundLocations;
    })
  }
  
  private getPosition(): void {
    this.message = 'Getting your location...';
    this.geolocationService.getPosition(
      this.getLocations.bind(this),
      this.showError.bind(this),
      this.noGeo.bind(this));
  }

  private showError(error: any): void {
    this.message = error.message;
  }

  private noGeo(): void {
    this.message = 'Geolocation not supported by this browser';
  }

  public locationDeleteById(i): void {
    if (window.confirm('Deleting Location')) {
      let id = this.locations[i]._id
      this.fidoDataService
      .deleteLocationById(id)
      .then(() => {
        this.getPosition()
      })
    }
  }

  ngOnInit(): void {
    if (this.authenticationService.isLoggedIn()) {
    this.getPosition();
    } else {
      this.router.navigate(['login'])
    }

  }

}
