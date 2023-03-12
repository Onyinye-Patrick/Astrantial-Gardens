import {FaBars, FaTimes } from 'react-icons/fa'
import { useRef } from 'react'

const NavBar = ()=>{
    const navRef = useRef();
    const showNav = ()=>{
        navRef.current.classList.toggle("media-screen");
    }

    return(
        <div className="navbar">
        <nav ref={navRef}>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Features</a>
            <a href="#">Shop</a>
            <a href="#">Contact Us</a>
            <button className='nav-hide-btn' onClick={showNav}><FaTimes/></button>
        </nav>
        <button className='nav-show-btn' onClick={showNav}><FaBars/></button>
        </div>
    )
}

export default NavBar