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
    type: String,
    required: true,
  },
  Description: {
    type: String,
    required: true,
  },
  Status: {
    type: String,
    required: true,
  },
},
{
  timestamps: true,
}
);

//MongoDB Collection named here - will give lowercase plural of name 
module.exports = mongoose.model("Register", RegisterSchema);
