import React from 'react';
import logo from './logo.svg';
import 'semantic-ui-css/semantic.min.css'
import {Route, Switch} from 'react-router-dom'
import './App.css';
import Header from './components/screens/Header'
import Login from './components/screens/Login'
import Error from './components/screens/Error'
import Menu from './components/screens/Header'
import SignUp from './components/screens/SignUp'
import ForgetPass from './components/screens/ForgetPassword'
import TestGet from './components/screens/TestGet'
import drop from './components/screens/Drop'
import ViewProject from './components/screens/ViewProjectCardTiles'
import CardsA from './components/screens/AfterCreateProject'

function App() {
  return (
    <>
        
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/Home' component={Header} />
          <Route path='/SignUp' component={SignUp} />
          <Route path='/ForgetPass' component={ForgetPass}/>
          <Header>
          <Route  path='/Test' component={TestGet}/>
          <Route path='/drop' component={drop}/>
          <Route path='/ViewProject' component={ViewProject}/>
          <Route path='/AfterProject' component={CardsA}/>
          <Route component={Error} />
          </Header>
        </Switch>
    
    </>
  );
}

export default App;
