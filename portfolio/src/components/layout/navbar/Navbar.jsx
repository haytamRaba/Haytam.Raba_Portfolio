import React from 'react'
import './navbar.css'
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='left'>
        <img
          src="https://cdn-icons-png.flaticon.com/512/6062/6062646.png"
          alt="logo"
         className="logo"
        />
        <h1 className="name" >Haytam</h1>
      </div>

      <div className='right'>
        <h2>#Home</h2>
        <h2 >#Projects</h2>
        <h2 >#Skills</h2>
        <h2 >#About</h2>
        <h2>#Contact</h2>
        <h2>#FaQ</h2>
        <span>Eng</span>
      </div>


    </div>
  )
}

export default Navbar