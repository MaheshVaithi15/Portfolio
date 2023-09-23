import React from 'react';
import './intro.css';
import myimg from '../../assets/imgbg.png'
import btnimg from '../../assets/hireme.png';
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <section id="intro" className=''>
        <div className='introcontent'>
            <span className='hello'>Hello!</span>
            <span className='introtxt'>I'm <span className='introname'>Mahesh</span><br/>MCA Graduate</span>
            <p className='intropara'>Recent MCA graduate from Vellore Institute Of Technology,</p> 
            <p className='intropara'>passionate about technology and
            seeking for career Opportunity.</p>
            
            <Link activeClass='active' to='contactpage' spy={true} smooth={true} offset={-60} duration={500}><button className='btn'><img src={btnimg} alt='btnimg' className='btnimg'/>Hire Me</button></Link>
        </div>

        <img src={myimg} alt='mahesh' className='myimg'/> 

      

    </section>
  )
}

export default Intro;