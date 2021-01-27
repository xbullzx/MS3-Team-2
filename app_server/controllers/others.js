/* GET the About page */
const about = (req, res) => {
   res.render('generic-text', { title: 'About FIDO' });
 };
/* GET Pet's list page page */
const list = (req, res) => {
  res.render('list-form', { title: 'Pet needs list' });
};
/* GET Coupons page */
const discounts = (req, res) => {
  res.render('coupons', {
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
      facilities: ['25% off 50lb bags Dog Food', '$20 off first Veterinary visit', '$5 off Pet Grooming Service', '2 for 1 Premium Cat food'],
      distance: '1.2km'
    },{
      name: "Kate's Canine Resort",
      address: '2823 Main St, Kansas City, MO 64108',
      rating: 5,
      facilities: ['$10 off first Pet Grooming', '10% off Pet Motel', '5 Dog Walks for $40'],
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

/* GET Leave us a comment page */
const comments = (req, res) => {
  res.render('review-form', { title: 'Leave us a comment' });
};

const admin = (req, res) => {
  res.render('admin', { title: 'Administrator Page' });
};
 
 module.exports = {
  about,
  list,
  discounts,
  comments,
  admin
 };