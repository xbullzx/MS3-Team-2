const mongoose = require('mongoose');
const Lst = mongoose.model('List');
const Comm = mongoose.model('Comment')

// create the Pet needs list //
const petListCreate = (req, res) => {
  Lst.create({
    petName: req.body.petName,
	  text: req.body.text
  },
  (err, list) => {
    if (err) {
      res
        .status(400)
        .json(err);
    } else {
      res
        .status(201)
        .json(list);
    }
  });
};

const petListUpdate = (req, res) => {
  console.log(req.params.listid)
  if (!req.params.listid) {
    return res
      .status(404)
      .json({
        "message": "Not found, Listid is required"
      });
  }
  Lst
    .findById(req.params.listid)
    .exec((err, list) => {
      if (!list) {
        return res
          .status(404)
          .json({
            "message": "Listid not found"
          });
      } else if (err) {
        return res
          .status(400)
          .json(err);
      }
      list.petName = req.body.petName;
      list.text = req.body.text;
      list.save((err, list) => {
        if (err) {
          res
            .status(404)
            .json(err);
        } else {
          res
            .status(200)
            .json(list);
        }
      });
    }
  );
};

const petListDelete = (req, res) => {
  const {listid} = req.params;
  if (listid) {
    Lst
      .findByIdAndRemove(listid)
      .exec((err, list) => {
          if (err) {
            return res
              .status(404)
              .json(err);
          }
          res
            .status(204)
            .json(null);
        }
    );
  } else {
    res
      .status(404)
      .json({
        "message": "No List available..."
      });
  }
};


// send us a comment //
const commentsCreate = (req, res) => { };
const commentsRead = (req, res) => { };
const commentsDelete = (req, res) => { };

module.exports = {
  petListCreate,
  petListUpdate,
  petListDelete,
  commentsCreate,
  commentsRead,
  commentsDelete
};