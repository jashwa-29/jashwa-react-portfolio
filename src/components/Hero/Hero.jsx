    import React, { useEffect } from 'react'
    import { saveAs } from 'file-saver';
    import './hero.css';
    import { Link } from 'react-scroll';
    import AOS from 'aos';
    import { useTypewriter, } from 'react-simple-typewriter'
    
    const Hero = () => {
      useEffect(()=> {
        AOS.init({duration: 500})
    },[])

   const [typeEffect] = useTypewriter({
    words:['JASHWA'],
    loop:{},
    typeSpeed: 200,
    deleteSpeed: 40

   })
   
      const handleDownloadCV = () => {
        // Path to the PDF file in the assets folder
        const pdfPath = require('../../Assets/Jashwa-resume-29.pdf');
    
        // Fetch the PDF file using the path
        fetch(pdfPath)
          .then((response) => response.blob())
          .then((blob) => {
            // Download the Blob as a file using file-saver
            saveAs(blob, 'Jashwa-resume-29.pdf');
          })
          .catch((error) => {
            console.error('Error fetching or saving the PDF file:', error);
          });
      };

      // const el = React.useRef(null);



      
      return (
        <div className='hero'>
            <div className='container'>
            <div className='hero-flex'>
            <div className='hero-content'  data-aos="fade-right"
     data-aos-offset="300">
                <h3>HELLO <div className='hello-stroke'></div></h3>
                <h1>I AM <span>{typeEffect}</span></h1>
                <h4>Front-End Web Developer</h4>
                <div className='hero-btn'>
                    <a href="mailto:jashwa4673@gmail.com?subject=Job Opportunity&body=Hi there, I'm interested in discussing a job opportunity with you."><button className='hero-btn-one'>HIRE ME</button></a>
                 <button className='hero-btn-two' onClick={handleDownloadCV}>DOWNLOAD CV</button>
                </div>
                <div className='hero-soc-icons' data-aos="zoom-out-right">
                  <a href="https://www.instagram.com/jashxx_.07/"><i class="bi bi-instagram"></i></a>
                  <a href="https://www.facebook.com/me/"><i class="bi bi-facebook"></i></a>
                  <a href="https://wa.me/7092854846"><i class="bi bi-whatsapp"></i></a>
                  <a href="https://www.linkedin.com/in/jashwa-undefined-20a187268"> <i class="bi bi-linkedin"></i></a>
                </div>
                
            </div>
            <div className='hero-img' data-aos="zoom-in-up">
                 <img src={require('../../Assets/heroLogo.png')} alt="" />
            </div>
         
          </div>
          <div className='scroll-down' data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
            <Link to="about" smooth={true}  offset={-100} duration={100} className='header-nav'><p> <i class="bi bi-mouse"></i>Scroll down</p></Link>
          </div>
            </div>
           
        </div>
      )
    }
    
    export default Hero

