import React from 'react'
import { BrowserRouter,Switch,Route, Link } from 'react-router-dom'
import Login from './authpage/Login'
import Nav from './Nav'
import Profile from './Profile'

export default function Home() {

    function login(){
        return <Login/>
    }
    return (
        <>
        <div>
            <Nav />
            {login()} 
            {/* login will be rendered when isloggin is false otherwise below functions */}
        </div>
        <BrowserRouter>
          <Switch>
            <Route path="/profile" component={Profile}/>
          </Switch>
          <Link to="profile">Profile</Link>
        </BrowserRouter>
        </>
    )
}
