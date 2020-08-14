import React, { useContext } from 'react'
import {NavLink} from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

export const Navbar = () => {
  const $ = require( "jquery" )
  const auth = useContext(AuthContext)
  $(document).ready( () => {
    $('#dropdown-click').on('click', () => {
      $('#dropdown').toggleClass('dropdown-active')
    })  
  })
  const logoutHandler = async () => {
    try {
      auth.logout()
    } catch(e) {}
  }

  return (
    <nav>
      <div className="nav-wrapper">
        <a href="/personal" className="nav-logo">
          <img src="../img/Logo.png" alt="logo" className="nav-img"/> 
        </a>
        <ul className="nav-list">
          <li className="nav-item"><NavLink to="/">На главную</NavLink></li>
          <li className="nav-item"><NavLink to="/personal">Мои курсы</NavLink></li>
          <li className="nav-item"><NavLink to="/personal">Каталог курсов</NavLink></li>
          <li className="nav-item">
            <div className="nav-profile" id="dropdown-click">
              <div className="nav-profile__title">{auth.user.firstName}</div>
              <img className="nav-profile__img" src="../img/training/boy.png" alt="user_photo"/>
              <div>
                <i className="fas fa-sort-down nav-profile__icon"></i>
              </div>
            </div>
            <ul className="dropdown-list" id="dropdown">
              <li className="dropdown-item"><NavLink className="dropdown-link" to="/personal">Профиль</NavLink></li>
              <li className="dropdown-item"><NavLink className="dropdown-link" to="/personal">Помощь</NavLink></li>
              <li className="dropdown-item"></li>
              <li className="dropdown-item"><NavLink className="dropdown-link" onClick={logoutHandler} to="/">Выход</NavLink></li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>  
  )
}