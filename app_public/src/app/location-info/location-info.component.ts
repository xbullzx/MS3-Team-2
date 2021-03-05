import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router'
import { AuthenticationService } from '../authentication.service'
import { FidoDataService } from '../fido-data.service'
import { Location } from '../location'


@Component({
  selector: 'app-location-info',
  templateUrl: './location-info.component.html',
  styleUrls: ['./location-info.component.css']
})
export class LocationInfoComponent implements OnInit {
  @Input() location: Location

  public newLocation: any = {
    _id: '',
    name: '',
    address: '',
    facilities: '',
    lng: '',
    lat: '',
    days1: '',
    openings1: '',
    closing1: '',
    closed1: '',
    days2: '',
    openings2: '',
    closing2: '',
    closed2: '',
  }

  public formError: string;

  private formIsValid(): boolean {
    if(this.newLocation.name && this.newLocation.lng && this.newLocation.lat) {
      return true
    } else {
      return false
    }
  }

  public newLocationSubmit(): void {
    this.formError = '';
    if (this.formIsValid()) {
      this.fidoDataService
        .createLocation(this.newLocation)
        .then(() => {
          this.router.navigate(['admin'])
        })
    } else {
      this.formError = 'Location name, latitude and longitude are required'
    }
  }

  constructor(
    private fidoDataService: FidoDataService,
    private router: Router,
    private authenticationService: AuthenticationService,
  ) {}

  ngOnInit(): void {
    if (!this.authenticationService.isLoggedIn()) {
      this.router.navigate(['login'])
    }
  }

}
