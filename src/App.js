import React from 'react';
import logo from './logo.svg';
import 'semantic-ui-css/semantic.min.css'
import {Route, Switch} from 'react-router-dom'
import './App.css';
import Header from './components/screens/Header'
import Login from './components/screens/Login'
import Error from './components/screens/Error'
import Menu from './components/screens/Header'

function App() {
  return (
    <>

        <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/Home' component={Header} />
          <Route path='/SignUp' component={Header} />
          <Route component={Error} />
        </Switch>
    
    </>
  );
}

export default App;
