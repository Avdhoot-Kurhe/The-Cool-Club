const { ReviewModel } = require("../models/review.model");

const getReviews = async (req, res) => {
  const { productid } = req.params;
  try {
    let reviews = await ReviewModel.find({ productid:productid });
    res.send(reviews);
  } catch (err) {
    res.send({ msg: "Something went wrong while fetching reviews" });
  }
};
const addReviews = async (req, res) => {
  let review = req.body;
  try {
    
      let addreview = await ReviewModel.insertMany([{...review}] );
      res.send(addreview);
    
  } catch (err) {
    res.send({ msg: "Something went wrong while adding reviews" });
  }
};
const updateReviews = async (req, res) => {
  let { id } = req.params;
  let review = req.body;
  try {
    let updatestatus = await ReviewModel.updateOne(
      { $and: [{ uid: review.uid},{ _id: id }] },
      { ...review }
    );
    res.send(updatestatus);
  } catch (err) {
    res.send({ msg: "Something went wrong while updating reviews" });
  }
};
const deleteReviews = async (req, res) => {
  let { id } = req.params;
  let review = req.body;
  try {
    let deletestatus = await ReviewModel.updateOne({
      $and: [{ uid: review.uid},{ _id: id }],
    });
    res.send(deletestatus);
  } catch (err) {
    res.send({ msg: "Something went wrong while deleting reviews" });
  }
};

const noOfReviews = async (req, res) => {
  let review = req.body;
  try {
    let size = await ReviewModel.find({
      $and: { productid: review.productid },
    }).size();
    res.send({ size });
  } catch (err) {
    res.send({ msg: "Something went wrong while updating reviews" });
  }
};
const noOfStars = async (req, res) => {
  let review = req.body;
  try {
    let one = await ReviewModel.find({
      $and: { productid: review.productid, star: 1 },
    }).size();
    let two = await ReviewModel.find({
      $and: { productid: review.productid, star: 2 },
    }).size();
    let three = await ReviewModel.find({
      $and: { productid: review.productid, star: 3 },
    }).size();
    let four = await ReviewModel.find({
      $and: { productid: review.productid, star: 4 },
    }).size();
    let five = await ReviewModel.find({
      $and: { productid: review.productid, star: 5 },
    }).size();
    res.send({
      onestar: one,
      twostar: two,
      threestar: three,
      fourstar: four,
      fivestar: five,
    });
  } catch (err) {
    res.send({ msg: "Something went wrong while updating reviews" });
  }
};

const ReviewController = {
  getReviews,
  addReviews,
  updateReviews,
  deleteReviews,
  noOfReviews,
  noOfStars,
};

module.exports = {
  ReviewController,
};
