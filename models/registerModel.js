const mongoose = require("mongoose");

const RegisterSchema = new mongoose.Schema({
  user:{
    type: mongoose.Schema.Types.ObjectId,
    required:true,
    ref: 'User'
  },
  equipment: {
    type: String,
    required: [true, 'Please add the equipment type (microinverter ou inverter)']
  },
  inmetroRegister: {
    type: String,
    required: [true, 'Please add an INMETRO register']
  },
  brand: {
    type: String,
    require: [true, 'Please add a Brand for the equipment']
  },
  model: {
    type: String,
    require: [true, 'Please add a Model for the equipment']
  },
  powerkW: {
    type: Number,
    required: [true, 'Please add the Power rating for the equipment']
  },
  inmetroURL: {
    type: String,
    required: [true, 'Please add the register URL']
  },
  description: {
    type: String,
    required: [true, 'Please add a Description of the equipment']
  },
  status: {
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
