const { default: mongoose } = require("mongoose");

const rentModel = new mongoose.Schema(
  {
    startDate: { type: "Date", required: true },
    endDate: { type: "Date", required: true },
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    car: { type: Schema.Types.ObjectId, ref: "Car", required: true },
  },
  {
    timestamps: true,
  }
);

const Rent = mongoose.model("Rent", rentModel);
module.exports = Rent;
