import { ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { Location, Review } from '../location';
import { FidoDataService } from '../fido-data.service';
import { AuthenticationService } from '../authentication.service';
import { switchMap } from 'rxjs/operators'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.css']
})
export class LocationDetailsComponent implements OnInit {

  @Input() location: Location;

  public newReview: Review = {
    author: '',
    rating: 5,
    reviewText: ''
  };

  public formVisible: boolean = false;
  public formError: string;

  public googleAPIKey: string = 'AIzaSyA3mHT7hbqxrqKoi-0roVUIC0KoAfiP0E0';

  constructor(
    private fidoDataService: FidoDataService,
    private authenticationService: AuthenticationService, 
    private route: ActivatedRoute
  ) { }


  newLocation: Location;

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
           let id = params.get('locationId');
           return this.fidoDataService.getLocationById(id);
         })
      )
      .subscribe((newLocation: Location) => {
        this.newLocation = newLocation;
      });
  }


  private formIsValid(): boolean {
    if (this.newReview.author && this.newReview.rating && this.newReview.reviewText) 
{
      return true;
    } else {
      return false;
    }
  }

  public onReviewSubmit(): void {
    this.formError = '';
    this.newReview.author = this.getUsername();
    if (this.formIsValid()) {
      this.fidoDataService.addReviewByLocationId(this.newLocation._id, this.newReview)
        .then((review: Review) => {
          //let reviews = this.newLocation.reviews.slice(0);
          //reviews.unshift(review);
          //this.newLocation.reviews = reviews;
          this.resetAndHideReviewForm();
        });
        
    } else {
      this.formError = 'All fields requried, please try again';
    }
  }

  private resetAndHideReviewForm(): void {
    this.formVisible = false;
    this.newReview.author = '';
    this.newReview.rating = 5;
    this.newReview.reviewText = '';
    window.location.reload();
  }

  public isLoggedIn(): boolean {
    return this.authenticationService.isLoggedIn();
  }

  public getUsername(): string {
    const { name } = this.authenticationService.getCurrentUser();
    return name ? name : 'Guest';
  }
}