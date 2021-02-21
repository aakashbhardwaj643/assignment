const Review = require('../models/review');
const mongoose = require('mongoose');

const getReviews = (req, res) => {
  Review.find()
    .then((result) => res.status(200).json(result))
    .catch(err => res.status(404).json({ message: err.message }));
}

const createReview = (req, res) => {
  const newReview = new Review(req.body);

  newReview.save()
    .then(() => res.status(201).json(newReview))
    .catch(err => res.status(409).json({ message: err.message }));
}

const updateReview = (req, res) => {
  const id = req.params.id;
  const review = req.body;

  if(!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send('No Reviews with that id');
  }

  Review.findByIdAndUpdate(id, { ...review, id }, { new: true })
    .then(result => res.json(result))
    .catch(err => console.log(err));
}

const deleteReview = (req, res) => {
  const id = req.params.id;

  if(!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send('No Reviews with that id');
  }

  Review.findByIdAndRemove(id)
    .then(() => res.json({ message: 'Post Deleted Succesfully' }))
    .catch(err => console.log(err.message));
}

module.exports = {
  getReviews,
  createReview,
  updateReview,
  deleteReview
}