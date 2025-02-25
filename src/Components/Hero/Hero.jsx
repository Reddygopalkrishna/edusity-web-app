import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
const Hero = () => {
  return (
    <div className='hero container'>
     <div className='hero-text'>
      <h1>Empowering Future Leaders Through Excellence in Education!</h1>
      <p>At Edusity, we believe that education is the foundation for a brighter future. Our globally recognized programs and state-of-the-art facilities provide students with the tools they need to succeed in their careers and make a meaningful impact on the world.</p>
      <button className='btn'>Explore More <img src={dark_arrow} alt="" /></button>
     </div>
      
    </div>
  )
}

export default Hero
