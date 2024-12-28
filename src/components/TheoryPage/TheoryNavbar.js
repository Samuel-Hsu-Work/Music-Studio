import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Home, User, Settings, HelpCircle } from 'lucide-react';


const VerticalNavbar = () => {
    return (
        <nav className="bg-gray-800 text-white h-screen w-64 fixed left-0 top-0 flex flex-col">
          <ul className="flex-grow">
          <li className="p-4 font-bold">
            <Link to="/Theory">Notations</Link> {/* 指向 /Theory */}
          </li>
          <li className="p-4 font-bold">
            <Link to="/Theory/Scales">Scales</Link> {/* 指向 /Theory/Scales */}
          </li>
          </ul>
        </nav>
      );
  };

export default VerticalNavbar;

