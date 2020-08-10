import {useState, useCallback, useEffect} from 'react'

const storageName = 'userData'

export const useAuth = () => {
  const [token, setToken] = useState(null)
  const [userId, setUserId] = useState(null)
  const [user, setUser] = useState(null)

  const login = useCallback( (jwtToken, id, userData) => {
    setToken(jwtToken)
    setUserId(id)
    setUser(userData)
    localStorage.setItem(storageName, JSON.stringify({
      userId: id, token: jwtToken, user: userData
    }))
  }, [])

  const logout = useCallback( () => {
    setToken(null)
    setUserId(null)
    setUser(null)
    localStorage.removeItem(storageName)
  }, [])

  useEffect( () => {
    const data = JSON.parse(localStorage.getItem(storageName))
    if (data && data.token) {
      login(data.token, data.userId, data.user)
    }
  }, [login])

  return {login, logout, token, userId, user}
}