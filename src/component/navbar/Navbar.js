import React, { useState } from 'react';
import logo from "../../assest/image/newlogo.png";
import './Navbar.css';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <div className='main'>
                <img src={logo} alt="Logo" className='logo' />
                <div className='ptagmain'>
                    <p className='ptag'>Home</p>
                    <p className='ptag'>About</p>
                    <p className='ptag'>Courses</p>
                    <p className='ptag'>GED</p>
                    <p className='ptag'>Team</p>
                    <p className='ptag'>Contact</p>
                </div>
                <div className='hamburger' onClick={toggleMenu}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className={`mobileMenu ${menuOpen ? 'active' : ''}`}>
                    <p className='ptag'>Home</p>
                    <p className='ptag'>About</p>
                    <p className='ptag'>Courses</p>
                    <p className='ptag'>GED</p>
                    <p className='ptag'>Team</p>
                    <p className='ptag'>Contact</p>
                <button className='buttonMobile'>Apply Now</button>

                </div>
                <button className='button'>Apply Now</button>
            </div>
        </>
    );
}
