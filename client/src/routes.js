import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {PersonalAreaPage} from './pages/PersonalAreaPage'
import {LandingPage} from './pages/LandingPage'
import {LoginPage} from './pages/LoginPage'
import {RegisterPage} from './pages/RegisterPage'
import {CoursePage} from './pages/CoursePage'

export const useRoutes = (isAuthenticated, user) => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/" exact>
          <LandingPage />
        </Route>
        <Route path="/personal" exact>
          <PersonalAreaPage name={user} />
        </Route>
        <Redirect to="/" />
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
      <Redirect to="/login" />
    </Switch>
  )

}