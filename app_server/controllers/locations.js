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
  res.render('location-info', { title: 'Location info' });
};

/* GET 'Add review' page */
const addReview = (req, res) => {
  res.render('location-review-form', { title: 'Add review' });
};

module.exports = {
  homelist,
  locationInfo,
  addReview
};