const { default: mongoose } = require("mongoose");

const billingSchema = new mongoose.Schema(
  {
    date: { type: Date, required: true, default: Date.now() },
    amount: { type: Number, required: true },
    rental: { type: Schema.Types.ObjectId, ref: "Rent" },
    payment: { type: Schema.Types.ObjectId, ref: "Payment" },
    status: { type: String, enum: ["Pending", "Paid"], default: "Pending" },
    method: {
      type: String,
      enum: ["Credit Card", "Cash", "Transfer"],
      required: true,
    },
    currency: { type: String, default: "USD" },
    tax: { type: Number, default: 0 },
    discount: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const Billing = mongoose.Model("Billing", billingSchema);
module.exports = Billing;
