import {useState, useCallback, useEffect} from 'react'

const storageName = 'userData'

export const useAuth = () => {
  const [token, setToken] = useState(null)
  const [ready, setReady] = useState(false)
  const [userId, setUserId] = useState(null)
  const [user, setUser] = useState({})

  const login = useCallback( (jwtToken, id, userData) => {
    setToken(jwtToken)
    setUserId(id)
    setUser(userData)
    setReady(true)
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
    setReady(true)
  }, [login])
  return {login, logout, token, userId, user, ready}
}