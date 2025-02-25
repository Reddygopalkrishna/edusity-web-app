import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'

import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'


const Contact = () => {
 const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Submiting....Wait few minutes");
    const formData = new FormData(event.target);

    formData.append("access_key", "e6c39bc3-61bd-403d-ae66-6737cf54ee0e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Submitted Successfully! Thank for reaching out.We'll get back to you");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contact'>
     <div className="contact-col">
      <h3>Send us Message <img src={msg_icon} alt="" /></h3>
      <p>Have questions or need assistance? Our team is here to help! Whether you're inquiring about admissions, programs, or general information, feel free to reach out. We strive to respond as quickly as possible.</p>
      <ul>
       <li><img src={mail_icon} alt="" />admissions@educity.com</li>
       <li><img src={phone_icon} alt="" />+91 7989795331</li>
       <li><img src={location_icon} alt="" />77 Los Angels Ave,Cambridge <br />MA 09731,United States of America</li>
      </ul>
     </div>
     <div className="contact-col">
      <form onSubmit={onSubmit} >
       <label htmlFor="">Your Name</label>
       <input type="text" name='name' placeholder='Enter your full name' required/>
       <label htmlFor="">Phone Number</label>
       <input type="tel" name='phone' placeholder='Phone Number' required/>
       <label htmlFor="">Enter your Messege!</label>
       <textarea name="messege" rows='6' placeholder='Let us know how we can assist you' required></textarea>
       <button type='sumbit' className='btn dark-btn'>Submit Now<img src={white_arrow} alt="" /></button>

      </form>
      <span>{result}</span>
     </div>
      
    </div>
  )
}

export default Contact
