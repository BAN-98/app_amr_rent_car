const { default: mongoose } = require("mongoose");

const carSchema = new mongoose.Schema(
  {
    brand: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: Number, required: false },
    fuelType: {
      type: String,
      enum: ["Gasoline", "Disel", "Electric", "Hibrid"],
      required: true,
    },
    transmision: {
      type: String,
      enum: ["Automcatic", "Manual"],
      required: true,
    },
    avalible: { type: String, default: true },
    registrattionNumber: { type: String, unique: true },
    peopleCapacity: { type: Number, required: true },
    BagCapacity: { type: Number, required: true },
  },
  { timestamps: true }
);

const Car = mongoose.model("Car", carSchema);

module.exports = Car;