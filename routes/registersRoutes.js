const express = require('express')
const router = express.Router()
const {
  getRegisters,
  setRegister,
  updateRegister,
  deleteRegister,
} = require('../controllers/registersController')

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getRegisters).post(protect, setRegister)
router.route('/:id').delete(protect, deleteRegister).put(protect, updateRegister)

module.exports = router
