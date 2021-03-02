import { Component, OnInit } from '@angular/core';
import {FidoDataService } from '../fido-data.service';
import {GeolocationService} from '../geolocation.service';
import {Location} from '../location';


@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css'],
  providers: [FidoDataService, GeolocationService]
})
export class HomeListComponent implements OnInit {

  constructor( 
    private fidoDataService: FidoDataService,
    private geolocationService: GeolocationService
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
      console.log("get locations", this.locations)
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

  ngOnInit(): void {this.getPosition();

  }

}
