import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

export const CoursePage = () => {
  const {user} = useContext(AuthContext)
  return (
    <div>
      <h1>Курсы</h1>
      <div>{user.email}</div>
    </div>
  )
}