import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
const About = ({setPlayState} ) => {
  return (
    <div className='about'>
     <div className='about-left'>
      <img src={about_img} alt="" className='about-img'/>
      <img src={play_icon} alt="" className='play-icon' onClick={()=>{
        setPlayState(true)
      }}/>
     </div>
     <div className='about-right'>
      <h3>About University</h3>
      <h2>Nuturing tommorow leaders today</h2>
      <p>Edusity University is committed to shaping the leaders of tomorrow by providing an innovative and dynamic learning environment. Our institution fosters academic excellence, research, and holistic development, ensuring that students are equipped with the knowledge and skills to thrive in a competitive world.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat doloremque provident deserunt quam alias a assumenda facere nam cum ratione eveniet, modi totam, dignissimos enim! Possimus inventore nesciunt quasi sit?</p>
      

     </div>
      
    </div>
  )
}

export default About
