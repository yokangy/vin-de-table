const Review = require('../models/review');
const Wine = require('../models/wine');

exports.getReviews = function(req, res, next) {

}

exports.getWineReviews = function(req, res, next) {
  const wineID = req.params.id;
console.log(wineID)
  Review.find({ wine: wineID }, function(err, reviews){
    if (err) { return next(err); }
console.log(reviews)
    if(reviews) {
      return res.status(201).json(reviews);
    } else {
      return res.status(422).send({ error: 'No reviews found'});
    }
  })
}

/*
exports.getUserReviews = function(req, res, next) {

}
*/

exports.addReview = function(req, res, next) {
  const wineID = req.body.wineID;
  const rating = req.body.rating;
  const reviewText = req.body.review;

  const review = new Review({
    rating: rating,
    review: reviewText,
    wine: wineID
  });

  Wine.findOne({ _id: wineID }, function(err, existingWine) {
    if (err) { return next(err) }

    if(existingWine) {
      review.save(function(err, review) {
        if (err) { return next(err) }

        return res.status(201).json(review);
      })
    } else {
      return res.status(422).send({error: 'Wine does not exist'});
    }
  })


}