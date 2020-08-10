import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {useRoutes} from './routes';
import {useAuth} from './hooks/auth.hook'
import {AuthContext} from './context/AuthContext'


function App() {
  const {token, userId, login, logout, user} = useAuth()
  const isAuthenticated = !!token
  const routes = useRoutes(isAuthenticated)
  return (
    <AuthContext.Provider value={{token, userId, login, logout, isAuthenticated, user}}>
      <Router>
        <div>
          {routes}
        </div>
      </Router>
    </AuthContext.Provider>
  )
}

export default App;
