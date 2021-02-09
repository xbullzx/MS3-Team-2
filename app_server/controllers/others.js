/* GET the About page */
const about = (req, res) => {
  res.render('generic-text',
    {
      title: 'About FIDO',
      content: "FIDO was created to help Truckers find places for your Pet's needs, and a bigTruck parking spot at the same time! work done. Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita eos obcaecati distinctio ipsa, alias laborum sunt reiciendis eius assumenda nostrum voluptatibus excepturi, placeat fugit earum incidunt asperiores quos explicabo?' <br /><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed lorem ac nisi dignissim accumsan. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, nihil, ipsa ipsam sequi autem facere ab ullam dolorem perferendis facilis exercitationem illum omnis dicta consequatur quas, at magnam et officia? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, nostrum deserunt modi sequi in doloremque consectetur. Ad eligendi nihil reprehenderit reiciendis quasi aliquid voluptates quis vitae accusamus magni. Libero, ex!"
    },
  );
};


/* GET Pet's list page */
const list = (req, res) => {
  res.render('list-form', {
    title: 'Create a list',
    pageHeader: {
      title: "Create a list for your Pet's needs."
    },

    sidebar: "Looking for Trucker friendly locations to fill your pet's needs? FIDO will help you to locate a friendly local pet store, dog park, or emergency medical facilities and a bigTruck parking spot at the same time.",
  });
};


/* GET Coupons page */
const discounts = (req, res) => {
  res.render('coupons', {
    title: 'coupons',
    pageHeader: {
      title: '',
      strapline: "Find your pet's needs and places with bigTruck parking!"
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
  res.render('review-form',
    {
      title: 'Leave us a comment' ,
      pageHeader: { title: 'Tell us how we can make FIDO better!!!' },
	  
	      sidebar: "How can we make FIDO a better app for your life? Whatever your experience, good or bad, FIDO would be happy to hear from you.",
    }
  );
};

/* GET Admin page */
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