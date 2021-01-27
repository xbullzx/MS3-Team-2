/* GET 'home' page */
const homelist = (req, res) => {
  res.render('locations-list', {
    title: 'FIDO',
    pageHeader: {
      title: 'FIDO',
      strapline: "can find places for your pet's needs with bigTruck parking!"
    },

    sidebar: "Looking for Trucker friendly locations to fill your pet's needs? FIDO will help you to locate a friendly local pet store, dog park, or emergency medical facilities and a bigTruck parking spot at the same time.",

    locations: [{
      name: 'Petco',
      address: '123 Bone dr, Big Bowl, Mo 64333',
      rating: 3,
      facilities: ['Pet Grooming', 'Veterinarian', 'Pet Motel', 'Truck Parking'],
      distance: '1.2km'
    },{
      name: "Kate's Canine Resort",
      address: '2823 Main St, Kansas City, MO 64108',
      rating: 5,
      facilities: ['Pet Grooming', 'Pet Motel', 'Dog Walking'],
      distance: '1.6km'
    },{
      name: 'KC Pet Food',
      address: '1725 Southwest Blvd, Kansas City, KS 66103',
      rating: 4,
      facilities: ['Everyday Wholesale Pricing', 'Truck Parking'],
      distance: '3.2km'
    }]
  });
};

/* GET 'Location info' page */

const locationInfo = (req, res) => {
  res.render('location-info',
    {
      title: 'Starcups',
       pageHeader: {
        title: 'Loc8r',
      },
      sidebar: {
        context: 'is on FIDO because it has a great selection of pet food, toys, and pet services.',
        callToAction: "If you've been and you like it ~ or if you don't ~ please leave a review to help other people just like you."
      },
      location: {
        name: 'Petco',
        address: '123 Bone dr, Big Bowl, Mo 64333',
        rating: 3,
        facilities: ['Pet Food', 'Pet Grooming', 'Veterinarian', 'Dog Trainer'],
        coords: {lat: 39.06966493333336, lng: -94.5837033369857},
        openingTimes: [
          {
            days: 'Monday - Friday',
            opening: '8:00am',
            closing: '7:00pm',
            closed: false
          },
          {
            days: 'Saturday',
            opening: '8:00am',
            closing: '5:00pm',
            closed: false
          },
          {
            days: 'Sunday',
            closed: true
          }
        ],
        reviews: [
          {
            author: 'George Brett',
            rating: 5,
            timestamp: '16 February 2020',
            reviewText: 'My Dog Loves this place.'
          },
          {
            author: 'Trainer Joe',
            rating: 3,
            timestamp: '16 June 2013',
            reviewText: 'The training here is pretty good. two thumbs up.'
          }
        ]
      }
    }
  );
};
/* GET 'Add review' page */
const addReview = (req, res) => {
  res.render('location-review-form',
    {
      title: 'Review Starcups on Loc8r' ,
      pageHeader: { title: 'Review Starcups' }
    }
  );
};

module.exports = {
  homelist,
  locationInfo,
  addReview
};