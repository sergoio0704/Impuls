import React, { useState, useEffect, useContext } from 'react'
import {NavLink} from 'react-router-dom'
import { useHttp } from '../hooks/http.hook'
import { useMessage } from '../hooks/message.hook'
import { AuthContext } from '../context/AuthContext'

export const LoginPage = () => {
  const {loading, request, errors, clearError, success, clearSuccess} = useHttp()
  const message = useMessage()
  const auth = useContext(AuthContext)
  const [form, setForm] = useState({
    email: '', password: ''
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

  const loginHandler = async () => {
    try {
      const data = await request('/api/auth/login', 'POST', {...form})
      auth.login(data.token, data.userId, data.user)

    } catch(e) {}
  }

  return (
    <div className="login-bg">
      <div className="login-container">
        <div className="login">
          <img src="../img/auth/logo.png" className="login__img" alt="logo" />
          <div className="login__title">Авторизация</div>
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
            onClick={loginHandler}
            disabled={loading}
          >
            Войти
          </button>
          <div className="login__register">
            <NavLink to="/register" className="login__link">Создать аккаунт</NavLink>
          </div>
        </div>
      </div>
    </div>  
  )
}