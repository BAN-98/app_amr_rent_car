const { default: mongoose } = require("mongoose");

const paymentSchema = new mongoose.Schema(
  {
    date: { type: Date, required: true, default: new Date() },
    amount: { type: Number, required: true },
    paymentMethod: { type: String, required: true },
    rent: { type: Object.Types.ObjectId, required: true, ref: "Rent" },
  },
  { timestamps: true }
);

const Payment = mongoose.model("Payment", paymentSchema);

module.exports = Payment;
