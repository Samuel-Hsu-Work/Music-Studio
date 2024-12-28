import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Navigate , Routes,} from "react-router-dom";
import TheoryNavbar from './TheoryNavbar.js';
import Scales from './TheoryComponents/Scales.js'
import Notations from './TheoryComponents/Notations.js';

const Theory = () => {
  return (
    <div>
      <TheoryNavbar />
      <Routes>
        <Route path="/" element={<Notations />} />
        <Route path="Scales" element={<Scales />} /> 
      </Routes>
    </div>
  );
};

export default Theory