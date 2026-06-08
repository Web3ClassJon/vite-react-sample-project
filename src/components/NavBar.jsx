import React from 'react'
import { NavLink } from 'react-router-dom'


const NavBar = () => {


  
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      {" "}
      <NavLink to="/contact">Contact</NavLink>
      {" "}
      <NavLink to="/sports">Sports</NavLink>
      {" "}
      <NavLink to="/books">Books</NavLink>

    </nav>
  )
}

export default NavBar