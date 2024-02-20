import React from 'react'
import './footer.css';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <div className='footer'>
       <div className='main-footer-div'>
           <div className='footer-head'>
             <h4>JASHWA.S</h4>
           </div>
           <div className='footer-link'>
           <Link to="hero" smooth={true} offset={-165} duration={100} className='header-nav'><p>HOME</p></Link>
        <Link to="about" smooth={true}  offset={-100} duration={100} className='header-nav'><p>ABOUT</p></Link>
        <Link to="project" smooth={true} offset={-100} duration={100} className='header-nav'><p>PROJECTS</p></Link>
        <Link to="contact" smooth={true} offset={-100} duration={100} className='header-nav'><p>CONTACT</p></Link>
           </div>
           <div className='footer-soc-icons'>
            <a href="https://www.linkedin.com/in/jashwa-undefined-20a187268"><i class="bi bi-linkedin"></i></a>
           <a href="https://www.instagram.com/jashxx_.07/"><i class="bi bi-instagram"></i></a>
           <a href="https://www.facebook.com/me/"><i class="bi bi-facebook"></i></a>
           <a href=""><i class="bi bi-telegram"></i></a>
           </div>
           <div className="footer-copyrights">
            <p>Copyright © Web developer Jashwa- All rights reserved | 2023</p>
           </div>
       </div>
    </div>
  )
}

export default Footer
