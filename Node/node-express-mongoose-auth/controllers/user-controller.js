const User = require("../models/user");
const bcrypt = require("bcrypt");
const HttpError = require("../models/HttpError");

exports.index = async (req, res) => {
  let response = await User.find();
  return res.status(200).json({ status: true, data: response });
};

exports.show = async (req, res) => {
  //Code
  try {
    let response = await User.findById(req.params.id);
    return res.status(200).json({ status: true, data: response });
  } catch (error) {
    return res
      .status(404)
      .json({ status: false, message: "Document not found" });
    // throw new HttpError(404, "Document Not found!");
  }
};

exports.store = async (req, res) => {
  //Code
  //1000-9999 || 0000<=>9999
  let randomNumber = Math.random() * 10000;
  let verificationCode = Math.round(randomNumber);

  let hashedPassword = await bcrypt.hash(req.body.password, 12);
  let hashedVerificationCode = await bcrypt.hash(
    verificationCode.toString(),
    12
  );

  //Integration with
  //1) Email 2) SMS Provider

  let result = await User.insertMany({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
    verification_code: hashedVerificationCode,
  });

  res.status(201).json({
    status: true,
    message: "Success",
    data: result,
    verificationCode: verificationCode,
  });
};

exports.update = async (req, res) => {
  //Code
  try {
    let result = await User.updateOne(
      { _id: req.params.id },
      {
        $set: {
          name: req.body.name,
          email: req.body.email,
        },
      }
    );

    res.status(200).json({ status: true, message: "Success" });
  } catch (error) {
    res.status(422).json({
      status: false,
      message: "Failed, Document not found",
    });
  }
};

exports.destroy = async (req, res) => {
  //Code
  try {
    let result = await User.deleteOne({ _id: req.params.id });
    let deleted = result.deletedCount == 1;
    res.status(deleted ? 204 : 404).json({
      status: deleted,
      message: deleted == 1 ? "Success" : "Not found",
    });
  } catch (error) {
    res.status(422).json({
      status: false,
      message: "Failed, Document not found",
    });
  }
};
