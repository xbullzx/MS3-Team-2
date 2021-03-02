const express = require('express');
const router = express.Router();
const ctrlLocations = require('../controllers/locations');
const ctrlReviews = require('../controllers/reviews');
const ctrlLists = require('../controllers/others');
const ctrlComments = require('../controllers/others');
const ctrlAuth = require('../controllers/authentication');
const jwt = require('express-jwt');
const auth = jwt({
  secret: process.env.JWT_SECRET,
  userProperty: 'payload',
  algorithms: ['HS256']
});

// locations //
router
  .route('/locations')
  .get(ctrlLocations.locationsListByDistance)
  .post(ctrlLocations.locationsCreate);
router
  .route('/locations/:locationid')
  .get(ctrlLocations.locationsReadOne)
  .put(ctrlLocations.locationsUpdateOne)
  .delete(ctrlLocations.locationsDeleteOne);

// reviews //
router
  .route('/locations/:locationid/reviews')
  .post(auth, ctrlReviews.reviewsCreate);
router
  .route('/locations/:locationid/reviews/:reviewid')
  .get(ctrlReviews.reviewsReadOne)
  .put(auth, ctrlReviews.reviewsUpdateOne)
  .delete(auth, ctrlReviews.reviewsDeleteOne);

// Others //
// Pet List //
router
  .route('/lists')
  .post(ctrlLists.petListCreate)
router
  .route('/lists/:listid')
  .get(ctrlLists.petListReadIt)
  .put(ctrlLists.petListUpdate)
  .delete(ctrlLists.petListDelete)

  // Leave us a Comment //
router
  .route('/comments/')
  .post(ctrlComments.commentsCreate)
router
  .route('/comments/:commentid')
  .get(ctrlComments.commentsRead)
  .delete(ctrlComments.commentsDelete);

router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

module.exports = router;

