
import React,{ useRef } from 'react';
import insta from '../../assets/insta.png';
import linkedin from '../../assets/linked.png';
import git from '../../assets/gitlog.png';
import './contact.css';
import emailjs from '@emailjs/browser';


const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_v43a6it', 'template_k33uqgk', form.current, '18pCABLPW6SeCim37')
      .then((result) => {
          console.log(result.text);
          alert('Email Sent');
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
   <section id='contactpage'>
        <br/>
        <br/>
        <br/>
        
        <h1 className='contxt'>Contact Me</h1>
        <span className='contdesc'>Please fill out the form below to discuss for Job Opportunities.</span>
        <form className='contactform' ref={form} onSubmit={sendEmail}>
          <input type='text' className='name' placeholder='Name' name='your_name'/>
          <input type='email' className='email' placeholder='Email' name='your_email'/>
          <input type='text' className='number' placeholder='Contact No'/>
          <textarea name='message' rows="5" placeholder='Message' className='msg'></textarea>
          <button className='subtn' type='submit' value='send'>Submit</button>

          <div className='links'>
            
           <a href="https://instagram.com/mahesh_vaithi?igshid=OGQ5ZDc2ODk2ZA=="><img src={insta} alt='i' className='link'/></a>
           <a href="https://www.linkedin.com/in/maheshwaran-vaitheeswaran-738b6027a"><img src={linkedin} alt='l' className='link'/></a>
           <a href="https://github.com/MaheshVaithi15?
tab=repositories"><img src={git} alt='g' className='linkg'/></a>
          </div>

        </form>    
   </section>
  )
}

export default Contact