import React from 'react'
import './about.css';
// import { about } from 'react-scroll';
// import AOS from 'aos';

const About = () => {
    
//   useEffect(()=> {
//     AOS.init({duration: 2000})
// },[])

  return (
    <div className='about'>
      <div className='container'>
      <div className='abt-head'>
        <h2>ABOUT ME</h2>
        </div>
        
      <div className="abt-flex">
        <div className="abt-img" data-aos="zoom-in-right"   data-aos-offset="350"
     data-aos-easing="ease-in-sine">
          <img src={require('../../Assets/about-img.webp')} alt="" />
        </div>
        <div className="abt-content" data-aos="zoom-in-left"   data-aos-offset="350"
     data-aos-easing="ease-in-sine">
            <h3>Web Developer and Designer</h3>
            <p>As a Dedicated Full stack Web Developerwith Entry level experience in creating visually  appealing and user-friendly websites. Proficient in HTML, CSS, and JavaScript, React with a strong foundation in responsive design and cross-browser compatibility.</p>
        </div>
      </div>

      <div className='education'>
            <h3>EDUCATION</h3>
            <div className='ed-box'  data-aos="flip-left"   data-aos-offset="320"
     data-aos-easing="ease-in-sine">
                <p><i class="bi bi-mortarboard"></i>2024 | Certified - Full Stack Developer | WEB D SCHOOL</p>
                <p><i class="bi bi-mortarboard"></i>2020 - 2023 | Bachelor of Commerce | ST.Thomas college of arts & science</p>
                <p><i class="bi bi-mortarboard"></i>2018 - 2020 | Higher Secondary | Mar Thoma matriculation Higher Sec School</p>
            </div>
      </div>


      <div className='skill'>
        <div className="skill-head">
            <h3> MY SKILLS</h3>
            <div className="frontend">
              <div>
              <h4>FRONT-END</h4>
                <div className='skill-flex'>
                      <span data-aos="zoom-in">HTML</span>
                      <span data-aos="zoom-in">CSS</span>
                      <span data-aos="zoom-in">Bootstrap</span>
                      <span data-aos="zoom-in">Java Script</span>
                      <span data-aos="zoom-in">JQuery & Ajax</span>
                      <span data-aos="zoom-in">Wordpress</span>
                      <span data-aos="zoom-in">React</span>

                </div>
              </div>
                
                
        </div>
        <div className="main-b-o-flex">
        {/* <div className='backend'>
                <h4>BACK-END</h4>
                 <div className='skill-flex'>
                      <span data-aos="zoom-in">NODE JS</span>
                      <span data-aos="zoom-in">MONGODD</span>
              
                </div> 
                </div> */}
                <div className='others'>
                <h4>OTHERS</h4>
                <div className='skill-flex'>
                      <span data-aos="zoom-in">GSAP</span>
                      <span data-aos="zoom-in">GIT </span>
                      <span data-aos="zoom-in">GIT HUB</span>
                      <span data-aos="zoom-in">FIGMA</span>
              
                </div>
        </div>
    
      </div>



      </div>
      </div>
      </div>
        
      </div>
    
  )
}

export default About
