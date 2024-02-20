import React from 'react'
import './project.css'
import AOS from 'aos'


const Projects = () => {
  return (
     <div className='project'>
              <div className="container">
                <div className="project-head">
                  <h2>PROJECTS</h2>
<div className="project-row">

   <a href="https://jashwa-29.github.io/Resume-maker/">
   <div class="card"  data-aos="flip-left">
    <img src={require('../../Assets/resume-maker.webp')} alt="" />
    <div class="cardBody">
        <h1 class="cardTitle">Resume Maker</h1>
        <p class="cardInfo">single page website using HTML & CSS</p>
    </div>
</div>
   </a>
                   
 
<a href="https://jashwa-29.github.io/The-Pawsome-Friends/">
<div class="card"  data-aos="flip-left">
    <img src={require('../../Assets/pet-shop.webp')} alt="" />
    <div class="cardBody">
        <h1 class="cardTitle">The Pawsome Friends</h1>
        <p class="cardInfo">Multi page website  in HTML & CSS</p>
    </div>
</div>
</a>

<a href="https://jashwa-29.github.io/the-Wefix-Repair-services/">
<div class="card"  data-aos="flip-left">
    <img src={require('../../Assets/repair-web.webp')} alt="" />
    <div class="cardBody">
        <h1 class="cardTitle">Wefix repair service</h1>
        <p class="cardInfo">Single page website using Bootstrap</p>
    </div>
</div>
</a>

</div>

<div className="project-row">

    <a href="">               
<div class="card"  data-aos="flip-left">
    <img src={require('../../Assets/sneaker-web.webp')} alt="" />
    <div class="cardBody">
        <h1 class="cardTitle">Classix Senakers</h1>
        <p class="cardInfo">Multi page website using Bootstrap</p>
    </div>
</div>
</a>


<a href="https://jashwa-29.github.io/timer-project-javascript/">
<div class="card"  data-aos="flip-left">
    <img src={require('../../Assets/timer.webp')} alt="" />
    <div class="cardBody">
        <h1 class="cardTitle">Digital Clock</h1>
        <p class="cardInfo">using Javascript</p>
    </div>
</div>
</a>

<a href="https://jashwa-29.github.io/Crud-Operation-Javascript/">
<div class="card"  data-aos="flip-left">
    <img src={require('../../Assets/crud-op.webp')} alt="" />
    <div class="cardBody">
        <h1 class="cardTitle">Crud operation </h1>
        <p class="cardInfo">Registration Form with Crud operation using javascript</p>
    </div>
</div>
</a>

</div>

<div className="project-row">

   <a href="">
   <div class="card"  data-aos="flip-left">
    <img src={require('../../Assets/dictionary-api.webp')} alt="" />
    <div class="cardBody">
        <h1 class="cardTitle">English Dictionary API</h1>
        <p class="cardInfo"> API using Javascript</p>
    </div>
</div>
   </a>
                   
 

{/* <div class="card"  data-aos="flip-left">
    <img src={require('../../Assets/pet-shop.webp')} alt="" />
    <div class="cardBody">
        <h1 class="cardTitle">The Pawsome Friends</h1>
        <p class="cardInfo">Multi page website  in HTML & CSS</p>
    </div>
</div>

<div class="card"  data-aos="flip-left">
    <img src={require('../../Assets/resume-maker.webp')} alt="" />
    <div class="cardBody">
        <h1 class="cardTitle">Wefix repair service</h1>
        <p class="cardInfo">Single page website using Bootstrap</p>
    </div>
</div> */}

</div>

                </div>
              </div>
     </div>
  )
}

export default Projects
