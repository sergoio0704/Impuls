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
        <Route path="/personal" exact>
          {!!user && <PersonalAreaPage  />}
        </Route>
        <Route path="/course" exact>
          <CoursePage />
        </Route>
        <Route path="/" exact>
          <LandingPage />
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
      <Redirect to="/login" />
    </Switch>
  )

}