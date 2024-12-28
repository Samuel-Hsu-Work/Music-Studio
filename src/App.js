import React from 'react';
import { BrowserRouter as Router, Switch, 
  Route, Redirect, Routes,} from "react-router-dom";

import Navbar from './components/NavBar';
import Home from './components/Home';
import Theory from './components/Theory'
import Discussion from './components/Discussion';
import Tools from './components/Tools';
import MyAccount from './components/MyAccount';
import Language from './components/Language';
import Contact from './components/Contact'


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Theory" component={Theory} />
          <Route exact path="/Discussion" component={Discussion} />
          <Route exact path="/Tools" component={Tools} />
          <Route exact path="/MyAccount" component={MyAccount} />
          <Route exact path="/Contact" component={Contact} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
