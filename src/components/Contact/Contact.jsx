import React, { useEffect,useRef } from 'react'
import './contact.css'
import AOS from 'aos'
import emailjs from '@emailjs/browser';

const Contact = () => {
  useEffect(()=> {
      AOS.init({duration: 300})
  },[])

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_mxkickp', 'template_jtypr7y', form.current, {
        publicKey: 'rlnNVY0H6PsFFxtPL',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
 
  return (
    <div className='contact'>
      <div className='container'>
      <div className="contact-heading">
            <h2>GET IN TOUCH</h2>
            <p>If you like my Projects and Portfolio, kindly contact me here</p>
        </div>
      <div className="main-con-flex">
             <div className="form-box" data-aos="fade-down"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
                 <form ref={form} onSubmit={sendEmail}>
                
                    <div className="input-flex">
                        <input type="text" placeholder='Name' name="from_name" />
                       
                        <input type="email" placeholder='Eamil' name="email_id" />
                    </div>
                    <textarea name="" id="" cols="20" rows="10" placeholder='Message' name="message"></textarea>
                    <button type='submit' value="Send">Send<i class="bi bi-send"></i></button>



                </form> 
             </div>
             <div className='also-con-box' data-aos="fade-up"      data-aos-offset="300"
     data-aos-easing="ease-in-sine">
                    <h4>Also Contact me in </h4>
                    <p><span class="material-symbols-outlined">
mail
</span>jashwa46733@gmail.com</p>
                    <p><i class="bi bi-telephone-fill"></i>+91 7092854846</p>
             </div>
      </div>
      </div>
        
    </div>
  )
}

export default Contact
