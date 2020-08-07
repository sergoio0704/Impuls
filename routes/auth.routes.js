const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const config = require('config')
const {Router} = require('express')
const {check, validationResult, body} = require('express-validator')
const User = require('../models/User')


const router = Router()

// /api/auth/register
router.post(
  '/register',
  [
    check('email', 'Некорректный email').isEmail(),
    check('password', 'Пароль должен содержать от 6 до 32 символов').isLength({min: 6, max: 32})
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return res.status(400).json({message: 'Некорректные данные при регистрации!'})
      }
      const {email, password} = req.body
      const candidate = await User.findOne({email})
      if (candidate) {
        res.status(400).json({message: 'Такой пользователь уже существует'})
      }
      const hashedPassword = await bcrypt.hash(password, 12)
      const user = new User({email, password: hashedPassword})
      await user.save()
      res.status(201).json({message: 'Вы успешно заргестрированы!'})
      
    } catch(e) {
      console.log(e.message)
      res.status(500).json({message: 'Произошла ошибка при регистрации, попробуйте снова!'})

    }

  }
  )

module.exports = router 