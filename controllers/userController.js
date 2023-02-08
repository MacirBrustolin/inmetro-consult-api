const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

// @desc    Register new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { userName, email, password } = req.body
  
  if (!userName || !email || !password) {
    res.status(400)
    throw new Error('Please add all fields')
  }

  if(!email.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/)){
    res.status(422)
    throw new Error('Email format is invalid')
  } 

  // Check if user exists
  const userExists = await User.findOne({ email })

  if (userExists) {
    res.status(409)
    throw new Error('Email already registered')
  }

  // Hash password
  const salt = await bcrypt.genSalt(15)
  const hashedPassword = await bcrypt.hash(password, salt)
  
  // Create user
  const user = await User.create({
    userName,
    email,
    password: hashedPassword,
  })

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})

// @desc    Authenticate a user
// @route   POST /api/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  // Check for user email
  const user = await User.findOne({ email })

  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    })
  } else {
    res.status(400)
    throw new Error('Invalid credentials')
  }
})

// @desc    Get user data
// @route   GET /api/users/me
// @access  Private
const getMe = asyncHandler(async (req, res) => {
  res.status(200).json(req.user)
})

// @desc    Get all users
// @route   GET /api/users/all
// @access  Private and admin
const getAll = asyncHandler(async (req, res) => {
  
  if (req.user.role !== 'admin') {
    res.status(401)
    throw new Error('User not authorized')
  }

  const users = await User.find()

  if (!users){
    res.status(404)
    throw new Error('Users not found!')
  }
  res.status(200).json(users)
})

// @desc    Get user data
// @route   GET /api/users/me
// @access  Private/ADM

const updateUserRole = asyncHandler(async (req, res) => {
  const {id, role} = req.body

  if (!role || !id) {
    res.status(400)
    throw new Error('Please add all fields')
  }

  if (req.user.role !== 'admin') {
    res.status(401)
    throw new Error('User not authorized')
  }
  
  const user = await User.findById(id)

  //Check for the user existence
  if (!user) {
    res.status(400)
    throw new Error('User not found')
  }

  const updatedUser = await User.findByIdAndUpdate(id, req.body, {
    role: role,
  })
  const userUpdated = await User.findById(id)
  res.status(200).json(userUpdated)
})

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '1d',
  })
}

module.exports = {
  registerUser,
  loginUser,
  getMe,
  getAll,
  updateUserRole,
}