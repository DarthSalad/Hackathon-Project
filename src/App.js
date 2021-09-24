import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Home from "./components/Home"
// import {auth} from './firebase';
// import {useAuthState} from 'react-firebase-hooks/auth';

function App() {
  
  
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:id" component={Home} />
        <Route>
          <h1>Error page</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
