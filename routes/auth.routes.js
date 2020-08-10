const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const config = require('config')
const {Router} = require('express')
const {check, validationResult} = require('express-validator')
const User = require('../models/User')


const router = Router()

// /api/auth/register
router.post(
  '/register',
  [
    check('email', 'Некорректный email').isEmail(),
    check('password', 'Пароль должен содержать от 6 до 32 символов').isLength({min: 6, max: 32}),
    check('firstName', 'Поле \"Имя\" не должно быть пустым').notEmpty(),
    check('lastName', 'Поле \"Фамилия\" не должно быть пустым').notEmpty()
  ],
  async (req, res) => {
    try {
      console.log('Body: ', req.body)
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: 'Некорректные данные при регистрации!'})
      }
      const {email, password, firstName, lastName} = req.body
      const lvlAccess = 'student'
      const balance = 0
      const points = 0
      const candidate = await User.findOne({email})
      if (candidate) {
        res.status(400).json({message: 'Такой пользователь уже существует'})
      }
      const hashedPassword = await bcrypt.hash(password, 12)
      const user = new User({email, password: hashedPassword, firstName, lastName, lvlAccess, balance, points})
      await user.save()
      res.status(201).json({message: 'Вы успешно заргестрированы!'})
      
    } catch(e) {
      console.log(e.message)
      res.status(500).json({message: 'Произошла ошибка при регистрации, попробуйте снова!'})
    }
  }
)

//api/auth/login

router.post(
  '/login',
  async (req, res) => {
    try {
      const {email, password} = req.body
      const user = await User.findOne({email})
      if (!user) {
        return res.status(400).json({message: 'Неверный логин или пароль'})
      }
      const isMatch = bcrypt.compare(password, user.password)
      if (!isMatch) {
        return res.status(400).json({message: 'Неверный логин или пароль'})
      }
      console.log(user.id)
      const token = jwt.sign(
        {userId: user.id, userEmail: user.email},
        config.get('jwtSecret'),
        {expiresIn: '5h'}
      )
      res.json({token, userId: user.id, user})   
    } catch(e) {
      console.log(e.message)
      res.status(500).json({message: 'Произошла ошибка при авторизации, попробуйте снова!'})
    }
  }
)

module.exports = router 