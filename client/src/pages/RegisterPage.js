import React, {useState, useEffect} from 'react'
import {NavLink} from 'react-router-dom'
import { useHttp } from '../hooks/http.hook'
import { useMessage } from '../hooks/message.hook'

export const RegisterPage = () => {
  const message = useMessage()
  const {loading, request, errors, clearError, success, clearSuccess} = useHttp()
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', password: ''
  })

  useEffect( () => {
    message(errors)
    clearError()
  }, [errors, message, clearError])

  useEffect( () => {
    message(success)
    clearSuccess()
  }, [message, success, clearSuccess])
 
  const changeHandler = event => {
    setForm({ ...form, [event.target.name]: event.target.value})
  }

  const registerHandler = async () => {
    try {
      const data = await request('/api/auth/register', 'POST', {...form})
      console.log('Data', data)
    } catch(e) {}
  }

  return (
    <div className="login-bg">
      <div className="login-container">
        <div className="login">
          <img src="../img/auth/logo.png" className="login__img" alt="logo" />
          <div className="login__title">Регистрация</div>
          <div className="login-field">
            <label htmlFor="firstName" className="login__label">Имя</label>
            <input 
              type="text" 
              name="firstName" 
              className="login__input"
              placeholder="Иван"
              onChange={changeHandler}
            />
          </div>
          <div className="login-field">
            <label htmlFor="lastName" className="login__label">Фамилия</label>
            <input 
              type="text" 
              name="lastName" 
              className="login__input"
              placeholder="Иванов"
              onChange={changeHandler}
            />
          </div>
          <div className="login__email login-field">
            <label htmlFor="email" className="login__label">Email</label>
            <input 
              type="email" 
              name="email" 
              className="login__input"
              placeholder="you@example.com"
              onChange={changeHandler}
            />
          </div>
          <div className="login__password login-field">
            <label htmlFor="password" className="login__label">Пароль</label>
            <input 
              type="password" 
              name="password" 
              className="login__input"
              placeholder="password"
              onChange={changeHandler}
            />
          </div>
          <button 
            className="login__btn"
            onClick={registerHandler}
            disabled={loading}
          >
            Зарегистрироваться
          </button>
          <div className="login__register">
            <NavLink to="/login" className="login__link">Авторизация</NavLink>
          </div>
        </div>
      </div>
    </div>  
  )
}