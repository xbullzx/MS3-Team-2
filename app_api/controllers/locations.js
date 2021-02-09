const mongoose = require('mongoose');
const Loc = mongoose.model('Location');


const getAuthor =(req, res, callback) => {
  if(req.payload && req.payload.email) {
    User
      .findOne({ email : req.payload.email })
      .exec((err, user) => {
        if(!user) {
          return res
            .status(404)
            .json({"message": "User not found"});
        } else if (err) {
          console.log(err);
          return res
            .status(404)
            .json(err);
        }
        callback(req, res, user.name);
      });
  } else {
    return res
      .status(404)
      .json({"message": "User not found"});
  }
};


const doAddReview = (req, res, location, author) => {
  if (!location) {
    res
      .status(404)
      .json({ "message": "Location not found" });
  } else {
    const { author, rating, reviewText } = req.body;
    location.reviews.push({
      author,
      rating,
      reviewText
    });
    location.save((err, location) => {
      if (err) {
        console.log(err);
        res
          .status(400)
          .json(err);
      } else {
        updateAverageRating(location._id);
        let thisReview = location.reviews[location.reviews.length - 1];
        res
          .status(201)
          .json(thisReview);
      }
    });
  }
};


const reviewsCreate = (req, res) => {
  getAuthor(req, res,
    (req, res, userName) => {
      const locationId = req.params.locationid;
      if (locationId) {
        Loc
          .findById(locationId)
          .select('reviews')
          .exec((err, location) => {
            if (err) {
              res
                .status(400)
                .json(err);
            } else {
              doAddReview(req, res, location, userName);
            }
          });
      } else {
        res
          .status(404)
          .json({ "message": "Location not found 1" });
      }
    });
};

const reviewsDeleteOne = (req, res) => { };

const reviewsReadOne = (req, res) => {
  Loc
    .findById(req.params.locationid)
    .select('name reviews')
    .exec((err, location) => {
      if (!location) {
        return res
          .status(404)
          .json({
            "message": "location not found"
          });
      } else if (err) {
        return res
          .status(400)
          .json(err);
      }
      if (location.reviews && location.reviews.length > 0) {
        const review = location.reviews.id(req.params.reviewid);
        if (!review) {
          return res
            .status(404)
            .json({
              "message": "review not found"
            });
        } else {
          response = {
            location: {
              name: location.name,
              id: req.params.locationid
            },
            review
          };
          return res
            .status(200)
            .json(response);
        }
      } else {
        return res
          .status(404)
          .json({
            "message": "No reviews found"
          });
      }
    }
    );
};

const reviewsUpdateOne = (req, res) => { };


module.exports = {
    locationsListByDistance,
    locationsCreate,
    locationsReadOne,
    locationsUpdateOne,
    locationsDeleteOne
  };