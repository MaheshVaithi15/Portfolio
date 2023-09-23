import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/mlogo.png';
import { Link } from 'react-scroll';
import contactimg from '../../assets/contact.png';
import mob from '../../assets/menu.png';

const Navbar = () => {
  const [showmenu,setShowMenu] = useState(false);
  return (
    <nav className='navbar'>
        <img src={logo} alt="logo" className='logo'/>
        <div className='desktopMenu'>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-60} duration={500} className='desktopListItem'>About</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-60} duration={500} className='desktopListItem'>Skills</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-60} duration={500} className='desktopListItem'>Projects</Link>
        </div>
        <button className='desktopMenubtn' onClick={()=>{document.getElementById('contactpage').scrollIntoView({behavior:'smooth'});}}>
            <img src={contactimg} alt="" className='desktopMenuImg'/>
            Contact Me
        </button>


        <img src={mob} alt="m" className='menu' onClick={()=>setShowMenu(!showmenu)}/>
        <div className='navMenu' style={{display: showmenu ? 'flex':'none'}}>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-60} duration={500} className='ListItem' onClick={()=>setShowMenu(false)}>About</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-60} duration={500} className='ListItem' onClick={()=>setShowMenu(false)}>Skills</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-60} duration={500} className='ListItem' onClick={()=>setShowMenu(false)}>Projects</Link>

            <Link activeClass='active' to='contactpage' spy={true} smooth={true} offset={-60} duration={500} className='ListItem' onClick={()=>setShowMenu(!showmenu)}>Contact</Link>
        </div>


    </nav>
  )
}

export default Navbar