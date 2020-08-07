import React from 'react'
import {NavLink} from 'react-router-dom'

export const LoginPage = () => {
  return (
    <div className="login-bg">
      <div className="login-container">
        <div className="login">
          <img src="../img/auth/logo.png" className="login__img" alt="logo" />
          <div className="login__title">Авторизация</div>
          <div className="login__email login-field">
            <label for="" className="login__label">Email</label>
            <input 
              type="email" 
              name="email" 
              className="login__input"
              placeholder="you@example.com"
            />
          </div>
          <div className="login__password login-field">
            <label for="" className="login__label">Пароль</label>
            <input 
              type="password" 
              name="password" 
              className="login__input"
              placeholder="password"
            />
          </div>
          <button className="login__btn">Войти</button>
          <div className="login__register">
            <NavLink to="/register" className="login__link">Создать аккаунт</NavLink>
          </div>
        </div>
      </div>
    </div>  
  )
}