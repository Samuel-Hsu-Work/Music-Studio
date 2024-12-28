import React from 'react';
import { BrowserRouter as Router, Route, Navigate , Routes,} from "react-router-dom";

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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Theory" element={<Theory />} />
          <Route path="/Discussion" element={<Discussion />} />
          <Route path="/Tools" element={<Tools />} />
          <Route path="/MyAccount" element={<MyAccount />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
