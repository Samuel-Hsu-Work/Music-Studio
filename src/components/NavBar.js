import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, 
  Route, Redirect, Routes,} from "react-router-dom";

const Navbar = () => {
  return (
    <div className='flex justify-between items-center h-18 max-w-[1280px] mx-auto px-1 text-white'>
      <h1 className='w-full text-2xl font-bold text-[#00df9a]'>3muel Music</h1>
      <ul className='md:flex'>
        <li className='p-4 font-bold'><Link to="/" smooth={true} duration={500}>Home</Link></li>
        <li className='p-4 font-bold'><Link to="/Theory" smooth={true} offset={-200} duration={500}>Music Theory</Link></li>
        <li className='p-4 font-bold'><Link to="/Discussion" smooth={true} offset={-50} duration={500}>Discussion</Link></li>
        <li className='p-4 font-bold'><Link to="/MyAccount" smooth={true} duration={500}>MyAccount</Link></li>
        <li className='p-4 font-bold'><Link to="/contact" smooth={true} offset={-50} duration={500}>contact</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;