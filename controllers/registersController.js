const asyncHandler = require('express-async-handler')

const Register = require('../models/registerModel')
const User = require('../models/userModel')

// @desc    Get all registers
// @route   GET /api/goals
// @access  Private
const getRegisters = asyncHandler(async (req, res) => {
  const registers = await Register.find()
  res.status(200).json(registers)
})

// @desc    Set register
// @route   POST /api/register
// @access  Private
const setRegister = asyncHandler(async (req, res) => {
  const { inmetroRegister, brand, model, powerkW, inmetroURL, description, status } = req.body
  if (!inmetroRegister || !brand || !model || !powerkW || !inmetroURL || !description || !status) {
    res.status(400)
    throw new Error('Please add all the fields')
  }

  // Check if register exists
  const registerExists = await Register.findOne({ inmetroRegister })

  if (registerExists) {
    res.status(400)
    throw new Error('Register already exists')
  }

  const register = await Register.create({
    user:req.user.id,
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

// @desc    Update goal
// @route   PUT /api/goals/:id
// @access  Private
const updateRegister = asyncHandler(async (req, res) => {
  const register = await Register.findById(req.params.id)

  if (!register) {
    res.status(400)
    throw new Error('Register not found')
  }

  // Check for user
  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  // Make sure the logged in user matches the goal user
  if (register.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  const updatedRegister = await Register.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })

  res.status(200).json(updatedRegister)
})

// @desc    Delete goal
// @route   DELETE /api/goals/:id
// @access  Private
const deleteRegister = asyncHandler(async (req, res) => {
  const register = await Register.findById(req.params.id)

  if (!register) {
    res.status(400)
    throw new Error('Goal not found')
  }

  // Check for user
  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  // Make sure the logged in user matches the goal user
  if (register.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
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
