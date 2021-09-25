import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Home from "./components/Home"
import Profile from './components/Profile';
// import {auth} from './firebase';
// import {useAuthState} from 'react-firebase-hooks/auth';

function App() {
  
  
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/profile" component={Profile} />
        <Route>
          <h1>Error page</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
