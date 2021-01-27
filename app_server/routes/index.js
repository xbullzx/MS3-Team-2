const express = require('express');
const router = express.Router();
const ctrlLocations = require('../controllers/locations');
const ctrlOthers = require('../controllers/others');
const ctrlList = require('../controllers/others');
const ctrlDiscounts = require('../controllers/others');
const ctrlComments = require('../controllers/others');
const ctrlAdmin = require('../controllers/others');

/* Locations pages */
router.get('/', ctrlLocations.homelist);
router.get('/location', ctrlLocations.locationInfo);
router.get('/location/review/new', ctrlLocations.addReview);

/* Other pages */
router.get('/about', ctrlOthers.about);
router.get('/list', ctrlList.list);
router.get('/discounts', ctrlDiscounts.discounts);
router.get('/comments', ctrlComments.comments);
router.get('/admin', ctrlAdmin.admin);

module.exports = router;