const asyncHandler = require('express-async-handler')

const Register = require('../models/registerModel')
const User = require('../models/userModel')

// @desc    Get all registers
// @route   GET /api/registers
// @access  Private
const getRegisters = asyncHandler(async (req, res) => {
  const { equipment, inmetroRegister, brand, model, powerkW, inmetroURL, description, status } = req.query

  const update = {};
  for (const key of Object.keys(req.query)){
      if (req.query[key] !== '') {
          update[key] = req.query[key];
      }
  }
  let registers = {}
  if (update == {}){
    registers = await Register.find()
  } else {
    registers = await Register.find({$and: [update]}).sort({ id: 1 })
  }

  if (registers.length){
    res.status(200).json(registers)
  } else {
    res.status(404)
    throw new Error('Registers not found')
  }
})

// @desc    Set register
// @route   POST /api/registers
// @access  Private
const setRegister = asyncHandler(async (req, res) => {
  const { equipment, inmetroRegister, brand, model, powerkW, inmetroURL, description, status } = req.body
  if (!equipment || !inmetroRegister || !brand || !model || !powerkW || !inmetroURL || !description || !status) {
    res.status(400)
    throw new Error('Please add all the fields')
  }

  // Check if register exists
  const registerExists = await Register.findOne({ inmetroRegister })

  if (registerExists) {
    res.status(409)
    throw new Error('Register already exists')
  }

  const register = await Register.create({
    user:req.user.id,
    equipment: equipment,
    inmetroRegister: inmetroRegister,
    brand: brand,
    model:model,
    powerkW:powerkW,
    inmetroURL:inmetroURL,
    description:description,
    status:status,
  })

  res.status(200).json(register)
})

// @desc    Update register
// @route   PUT /api/registers/:id
// @access  Private/Admin
const updateRegister = asyncHandler(async (req, res) => {

  if (req.user.role !== 'admin') {
    res.status(401)
    throw new Error('User not authorized')
  }

  const register = await Register.findById(req.params.id)
  
  if (!register) {
    res.status(404)
    throw new Error('Register not found')
  }

  // const updatedRegister = await Register.findByIdAndUpdate(req.params.id, req.body, {
  //   new: true,
  // })
  const filter = {id: req.params.id}
  const update = {};
  for (const key of Object.keys(req.body)){
      if (req.body[key] !== '') {
          update[key] = req.body[key];
      }
  }
  Register.findOneAndUpdate({}, {$set: update}, {new: true}).catch(err => {
        res.status(500).send(err);
        throw new Error('Information not updated')
    })
    const registerRes = await Register.findById(req.params.id)
    res.status(200).json(registerRes)
})

// @desc    Delete goal
// @route   DELETE /api/registers/:id
// @access  Private/Admin
const deleteRegister = asyncHandler(async (req, res) => {

  if (req.user.role !== 'admin') {
    res.status(401)
    throw new Error('User not authorized')
  }

  const register = await Register.findById(req.params.id)

  if (!register) {
    res.status(400)
    throw new Error('Register not found')
  }

  await register.remove()

  res.status(200).json({ id: req.params.id })
})

module.exports = {
  getRegisters,
  setRegister,
  updateRegister,
  deleteRegister,
}
