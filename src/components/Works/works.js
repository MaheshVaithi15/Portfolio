import React from 'react';
import './works.css';
import cdcml from '../../assets/cdc.png';
import epa from '../../assets/epa.png';
import smcs from '../../assets/smcsm.png';


const Works = () => {
  return (
  <section id='works'>

    <h2 className='ptitle'>Academic Projects</h2>
    <span className='pdesc'>Done Academic Level Projects as Below</span>
    <br/>

    <div className='pimgs'>
       <a href='https://github.com/MaheshVaithi15/crowd-detection-and-counting.git'><img className='pimg' src={cdcml} alt='cdcml'/></a>
        <a href='https://github.com/MaheshVaithi15/Electronic-Product-Review-Analysis-Using-Amazon-Dataset.git'><img className='pimg' src={epa} alt='epa'/></a>
        <a href='https://github.com/MaheshVaithi15/Student-Mark-Calculation-and-Grade-System-Using-Android-Studio.git'><img className='pimg' src={smcs} alt='smcs'/></a>
        
    </div>
    <br/>
    <p>More Projects On Github</p>
    <a  href="https://github.com/MaheshVaithi15?
tab=repositories"><button className='pbtn'>See More</button></a>




  </section>
  )
}

export default Works