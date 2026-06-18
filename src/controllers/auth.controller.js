const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
require("dotenv").config();

async function registerUser(req, res) {
  const { username, password, email } = req.body;

  const ifUserAlreadyExist = await userModel.findOne({
    $or: [{ email }, { username }],
  });
  if (ifUserAlreadyExist) {
    return res.status(409).json({
      message: "User already exists",
    });
  }

  const user = await userModel.create({
    username,
    password,
    email,
  });
  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET,
  );

  res.cookie("token", token);

  res.status(201).json({
    message: "user created successfully",
    user,
  });
}

module.exports = { registerUser };
