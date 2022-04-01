import React from 'react'
import {Link} from 'react-router-dom'
function Header() {
  return (
    <div className="navbar w-full   bg-ghost shadow-2xl" >
  <div className="navbar-start w-full">
    <div className="dropdown">
      <label tabIndex="0" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow-2xl bg-base-100 rounded-box w-52" style={{borderWidth:'1px',borderColor:'black'}}>
          <li><Link to='/home'>HOME</Link></li>
          <li><Link to='/gallery'>ABOUT US</Link></li>
          <li><Link to='/about'>PRODUCTS</Link></li>
          <li><Link to='/location'>BLOG</Link></li>
          <li><Link to='/contact'>CONTACT</Link></li>
          <li><Link to='/wishes'>PROFLE</Link></li>
      </ul>
    </div>
    <h1 className="ml-5 text-3xl" style={{fontFamily: 'Parisienne, cursive'}}>Anu's Cakes</h1>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
          <li><Link to='/home'>HOME</Link></li>
          <li><Link to='/gallery'>ABOUT US</Link></li>
          <li><Link to='/about'>PRODUCTS</Link></li>
          <li><Link to='/location'>BLOG</Link></li>
          <li><Link to='/contact'>CONTACT</Link></li>
          <li><Link to='/wishes'>PROFLE</Link></li>
    </ul>
  </div>
  
</div>
  )
}

export default Header