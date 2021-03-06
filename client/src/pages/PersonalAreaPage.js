import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

export const PersonalAreaPage = () => {
  const {user} = useContext(AuthContext)
  return (
    <div>
      <h1>Личный кабинет</h1>
      <div>Добро пожаловать {user.firstName} {user.lastName}</div>
    </div>
  )
}