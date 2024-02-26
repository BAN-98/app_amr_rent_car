const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    userName: { type: "string", required: true, trim: true },
    name: { type: "string", required: true, trim: true },
    phone: { type: "string", required: true, trim: true },
    email: { type: "string", required: true, trim: true, unique: true },
    password: { type: "string", required: true },
    city: { type: "string", required: false, trim: true },
    address: { type: "string", required: true, trim: true },
  },
  { timestamps: true, versionKey: false }
);
const User = mongoose.model("User", userSchema);

module.exports = User;
