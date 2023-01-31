const express = require('express')
const router = express.Router()
const {
  registerUser,
  loginUser,
  getMe,
  getAll,
  updateUserRole,
} = require('../controllers/userController')
const { protect } = require('../middleware/authMiddleware')

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/me', protect, getMe)
router.get('/all', protect, getAll)
router.put('/update', protect, updateUserRole)

module.exports = router