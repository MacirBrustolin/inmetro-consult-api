const mongoose = require("mongoose");

const RegisterSchema = new mongoose.Schema({
  INMETRO: {
    type: Number,
    required: true,
  },
  Brand: {
    type: String,
    require: true,
  },
  Model: {
    type: String,
    require: true,
  },
  PowerkW: {
    type: Number,
    required: true,
  },
  INMETRO_URL: {
    type: string,
    required: true,
  },
  Description: {
    type: string,
    required: true,
  },
  Status: {
    type: string,
    required: true,
  },
});

//MongoDB Collection named here - will give lowercase plural of name 
module.exports = mongoose.model("Register", RegisterSchema);
