import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='bg-yellow-400 py-3 flex justify-between px-8' >
        <Link to={"/"} >Home</Link>
        <Link to={"/about"} >About</Link>
        <Link to={"/addmission"} >Addmission</Link>
        <Link to={"/facilities"} >Facilities</Link>
        <Link to={"/gallery"} >Gallery</Link>
        <Link to={"/contact"} >Contact</Link>

    </div>
  )
}

export default Navbar

