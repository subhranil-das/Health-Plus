import React from 'react'
import styled from 'styled-components';
import { NavLink } from "react-router-dom";
import './Navsec.css'

const Navsec = () => {
   

  return (
    <div>
      <ul class="nav  second-nav ">
    <li class="nav-item">
      {/* <a class="nav-link" aria-current="page" href="labTests.html">Lab Tests</a> */}
      <NavLink exact to="/lab-tests" className="nav-link" aria-current="page">Lab Tests</NavLink>
    </li>
    <li class="nav-item">
    <NavLink exact to="/find-a-doctor" className="nav-link" aria-current="page">Find a Doctor</NavLink>
    </li>
    <li class="nav-item">
    <NavLink exact to="/consult-us" className="nav-link" aria-current="page">Consult Us</NavLink>
    </li>
    <li class="nav-item">
    <NavLink exact to="/product" className="nav-link" aria-current="page">Product</NavLink>
    </li>
  </ul>
    </div>
  )
}

export default Navsec
