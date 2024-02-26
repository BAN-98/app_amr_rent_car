mongoose = require("mongoose");

const connect = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/amr_rent_car");
    console.log("Conectado a MongoDB");
  } catch (error) {
    console.error("Error: " + error);
  }
};

module.exports = connect;
