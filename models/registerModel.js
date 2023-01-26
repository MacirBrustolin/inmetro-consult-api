const mongoose = require("mongoose");

const RegisterSchema = new mongoose.Schema({
  user:{
    type: mongoose.Schema.Types.ObjectId,
    required:true,
    ref: 'User'
  },
  INMETRO: {
    type: Number,
    required: [true, 'Please add an INMETRO register']
  },
  Brand: {
    type: String,
    require: [true, 'Please add a Brand for the equipment']
  },
  Model: {
    type: String,
    require: [true, 'Please add a Model for the equipment']
  },
  PowerkW: {
    type: Number,
    required: [true, 'Please add the Power rating for the equipment']
  },
  INMETRO_URL: {
    type: String,
    required: [true, 'Please add the register URL']
  },
  Description: {
    type: String,
    required: [true, 'Please add a Description of the equipment']
  },
  Status: {
    type: String,
    required: [true, 'Please add a Status for the register']
  },
},
{
  timestamps: true,
}
);

//MongoDB Collection named here - will give lowercase plural of name 
module.exports = mongoose.model("Register", RegisterSchema);
