import React from 'react';
import './skills.css';
import lang from '../../assets/program.png';
import frontend from '../../assets/frontend.png';
import sql from '../../assets/dbtech.png';
import pyfrw from '../../assets/pyframeworks.png';

const Skills = () => {
  return (
    <section id='skills' className='skills'>

         <span className='skilltitle'>Skills</span>
         <span className='skilldesc'>As I have a Theoritical Knowledge in Technologies and HandsOn Experince in FrameWorks. Beginner Level in FrontEnd Frameworks and having some knowledge in Python Web FrameWorks Flask and Django.</span>
         <div className='skillbars'>

            <div className='skillbar'>
                <img className='skillimg' src={lang} alt='p'/>
                <div className='skilltxt'>
                    <h2>Programming Languages</h2>
                    <p>Familiar With Basic Programming Languages like C , Java and Python</p>
                </div>

            </div>

            <div className='skillbar'>

                <img className='skillimgf' src={frontend} alt='f'/>
                <div className='skilltxt'>
                    <h2>FrontEnd Technologies</h2>
                    <p>Done Beginner HandsOn Projects in FrontEnd FrameWorks.</p>
                </div>
                
            </div>

            <div className='skillbar'>

                <img className='skillimgp' src={pyfrw} alt='pf'/>
                <div className='skilltxt'>
                    <h2>Python FrameWorks</h2>
                    <p>Familiar HandsOn Experience in Python Web FrameWorks Like Django and Flask.</p>
                </div>
                
            </div>

            <div className='skillbar'>

                <img className='skillimgd' src={sql} alt='s'/>
                <div className='skilltxt'>
                    <h2>Database Technologies</h2>
                    <p>HandsOn Experience in Database Technologies Like SQL and MongoDB</p>
                </div>
                
            </div>




         </div>

    </section>
  )
}

export default Skills