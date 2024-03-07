import React from 'react'
import './skill.css'

const Skill = () => {
  return (
    <section id='skill'>
      <div className="skill-heading">
        <h3>My Skills</h3>
      </div>
      {/* <div className="sub-skills-heading">
        <h4>Known</h4>
        </div> */}
        <div className="main-skills">
          <div className="skill-row-1">
            <img src={require('../../Assets/Figma.webp')} alt="" className='s-r-1-img' />
            <img src={require('../../Assets/HTML.webp')} alt="" className='s-r-1-img' />
            <img src={require('../../Assets/CSS.webp')} alt="" className='s-r-1-img' />
            <img src={require('../../Assets/javascript.webp')} alt="" className='s-r-1-js-img' />


          </div>
          {/* <div className="main-skills"> */}
          <div className="skill-row-2">
          <img src={require('../../Assets/react-js.webp')} alt="" className='s-r-2-img' />
          <img src={require('../../Assets/bootstrap.webp')} alt="" className='s-r-2-img' />
            <img src={require('../../Assets/Tailwind CSS.png')} alt="" className='s-r-3-img' />
            <img src={require('../../Assets/wordpress.webp')} alt="" className='s-r-2-img' />

          </div>
          <div className="skill-row-3">
          <img src={require('../../Assets/github.webp')} alt="" className='s-r-2-img' />
            <img src={require('../../Assets/Photoshop.webp')} alt="" className='s-r-2-img' />
          </div>
        {/* </div> */}
      </div>


    </section>
  )
}

export default Skill
