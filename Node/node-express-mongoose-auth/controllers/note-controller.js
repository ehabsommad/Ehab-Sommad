const Note = require("../models/note");
const fs = require("fs");
const User = require("../models/user");

exports.index = async (req, res) => {
  let page = req.query.page;
  let itemsPerPage = 2;
  let count = await Note.find({ owner: req.userId }).count();
  let notes = await Note.find()
    .skip((page - 1) * itemsPerPage)
    .limit(itemsPerPage);
  if (notes.length > 0) {
    res.status(200).json({
      status: true,
      data: notes,
      total: count,
      itemsPerPage: itemsPerPage,
      firstPage: 1,
      lastPage: Math.ceil(count / itemsPerPage),
      isLastPage: Math.ceil(count / itemsPerPage) == page,
      currentPage: page,
    });
  } else {
    res.status(404).json({ status: false, message: "Not Found" });
  }

  // let notes = await Note.find({ owner: req.userId });
  // let notes = await Note.aggregate([
  //   {
  //     $lookup: {
  //       from: "users",
  //       localField: "owner",
  //       foreignField: "_id",
  //       as: "user",
  //     },
  //   },
  // ]);
};
/**
 * Count: 7
 * PerPage: 2
 * LastPage: ceil(7 / 2)
 * isLastPage: Math.ceil(count / itemsPerPage) == page
 *
 */

exports.show = (req, res) => {};

exports.store = async (req, res) => {
  let user = await User.findById(req.userId);
  let result = await Note.insertMany({
    owner: req.userId,
    title: req.body.title,
    info: req.body.info,
    image: req.file.path.replace("\\", "/"),
  });

  user.notes.push(result[0]);
  await user.save();

  res.status(200).json({ status: true, object: result });
};

exports.update = (req, res) => {};

exports.destroy = async (req, res) => {
  let note = await Note.findById(req.params.id);
  if (note != null) {
    if (note.owner == req.userId) {
      let user = await User.findById(req.userId);
      await note.delete();

      fs.unlinkSync(note.image);

      user.notes.pull(note);
      await user.save();

      res.status(200).json({
        status: true,
        message: "Note deleted successfully",
      });
    } else {
      res
        .status(403)
        .json({ status: false, message: "Delete rejected, not the owner" });
    }
  } else {
    res.status(404).json({ status: false, message: "Not found" });
  }
};
