import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {PersonalAreaPage} from './pages/PersonalAreaPage'
import {LandingPage} from './pages/LangingPage'
import {LoginPage} from './pages/LoginPage'
import {RegisterPage} from './pages/RegisterPage'

export const useRoutes = isAuthenticated => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/personal" exact>
          <PersonalAreaPage />
        </Route>
        <Redirect to="/personal" />
      </Switch>
    )
  }

  return (
    <Switch>
      <Route path="/" exact>
        <LandingPage />
      </Route>
      <Route path="/login">
        <LoginPage />      
      </Route>
      <Route path="/register">
        <RegisterPage />  
      </Route> 
      <Redirect to="/" />
    </Switch>
  )

}