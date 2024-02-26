const User = require("../models/userModel");
const createAccessToken = require("../libs/jwt.js");
const bcrypt = require("bcrypt");

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userFound = await User.findOne({
      email: email,
    });
    if (!userFound) return res.status(400).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, userFound.password);
    if (!isMatch)
      return res.status(400).json({ message: "Incorrect password" });
    const token = await createAccessToken({ id: userFound._id });
    res.cookie("token", token);
    res.json({
      id: userFound._id,
      userName: userFound.userName,
      email: userFound.email,
      createdAt: userFound.createdAt,
      updateAt: userFound.updatedAt,
    });
  } catch (error) {
    console.error(error);
  }
};

exports.register = async (req, res) => {
  const { email, password, userName, name, phone, city, address } = req.body;

  const userFound = await User.findOne({ email: email });
  if (userFound) return res.status(400).json(["Email already registered"]);
  try {
    const passwordHash = await bcrypt.hash(password, 10);

    const newUser = new User({
      userName: userName,
      name: name,
      phone: phone,
      email: email,
      password: passwordHash,
      city: city,
      address: address,
    });

    const userSaved = await newUser.save();
    const token = await createAccessToken({ id: userSaved._id });
    res.cookie("token", token);
    res.json({
      id: userSaved._id,
      userName: userSaved.userName,
      email: userSaved.email,
      createdAt: userSaved.createdAt,
      updateAt: userSaved.updatedAt,
    });
  } catch (error) {
    console.error(error);
  }
};

exports.logout = async (req, res) => {
  res.cookie("token", "", { expires: new Date(0) });
  return res.sendStatus(200);
};

exports.profile = async (req, res) => {
  const userFound = await User.findById(req.user.id);
  if (!userFound) return res.status(400).json({ message: "User not found" });
  res.json({
    id: userFound._id,
    userName: userFound.userName,
    email: userFound.email,
    createdAt: userFound.createdAt,
    updateAt: userFound.updatedAt,
  });
};
