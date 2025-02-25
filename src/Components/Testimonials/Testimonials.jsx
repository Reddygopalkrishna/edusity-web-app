import React ,{useRef}from 'react'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'

import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

import './Testimonials.css'
const Testimonials = () => {
 const slider =  useRef();
 let tx = 0;


 const slideForward= ()=>{
  if (tx > -50){
   tx -= 25;
  }
  slider.current.style.transform = `translateX(${tx}%)`
 }

 const slideBackward= ()=>{
  if (tx < 0){
   tx += 25;
  }
  slider.current.style.transform = `translateX(${tx}%)`
  
 }

  return (
    <div className='testimonials'>
     <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
     <img src={back_icon} alt="" className='back-btn' onClick={slideBackward} />
     <div className="slider">
      <ul ref={slider}>
       <li>
        <div className='slide'>
         <div className="user-info">
          <img src={user_1} alt="" />
          <div>
           <h3>Sophia Martinez</h3>
           <span>Edusity, USA</span>
          </div>
         </div>
        <p>My experience at Edusity University has been truly transformative. The faculty is highly knowledgeable, the curriculum is industry-focused, and the campus fosters a supportive learning environment. I feel confident stepping into the professional world with the skills and knowledge I have gained here." — William Jackson, Edusity, USA</p>
        </div>
       </li>
       <li>
        <div className='slide'>
         <div className="user-info">
          <img src={user_2} alt="" />
          <div>
           <h3>William Jackson</h3>
           <span>Edusity, USA</span>
          </div>
         </div>
         <p>"The diverse community at Edusity has enriched my learning journey. The state-of-the-art labs, research opportunities, and mentorship from industry leaders have helped me grow both academically and professionally."</p>
        </div>
       </li>
       <li>
        <div className='slide'>
         <div className="user-info">
          <img src={user_3} alt="" />
          <div>
           <h3>Emily Chen </h3>
           <span>Edusity, USA</span>
          </div>
         </div>
         <p>"I chose Edusity for its excellent curriculum and global exposure. The internship programs and career support services have been instrumental in securing my dream job. I highly recommend Edusity to anyone looking for a world-class education."</p>
        </div>
       </li>
       <li>
        <div className='slide'>
         <div className="user-info">
          <img src={user_4} alt="" />
          <div>
           <h3>Tom Cruise</h3>
           <span>Edusity, USA</span>
          </div>
         </div>
         <p>"From day one, I knew I made the right choice. The engaging lectures, collaborative projects, and strong alumni network have made my time at Edusity unforgettable. This university truly prepares you for the future."</p>
        </div>
       </li>
       <li>
        <div className='slide'>
         <div className="user-info">
          <img src={user_3} alt="" />
          <div>
           <h3>Ashritha </h3>
           <span>Edusity, USA</span>
          </div>
         </div>
         <p>"Edusity University has been a life-changing experience for me. The faculty is incredibly supportive, and the hands-on learning approach has given me a competitive edge in my field. I feel well-prepared to take on real-world challenges."</p>
        </div>
       </li>
      </ul>
     </div>
      
    </div>
  )
}

export default Testimonials
