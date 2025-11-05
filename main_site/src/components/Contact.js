import React from 'react'
import "./css/Contact.css"
const Contact = () => {
  return (
    <section className='contact_outer_container' id="contact_section">
          
      <div className="contact_inner_container">
        
        <div className="contact_design_container">
            <div className="contact_design">
            <img src="/contact_image.jpg" className="contact_image" alt="" />
            </div>
            

        </div>
     
        
        <div className="contact_content_container">
          
            <div className="heading_container">
            <div className="contact_main_heading">Contácta<span>nos</span></div>
            <p>Queremos saber de ti</p>
            </div>
            <div className="contact_input_container">
                <input type="text" placeholder="Ingresa tu nombre" className='contact_name' />
                <input type="text"  placeholder="Ingresa tu correo electrónico" className='contact_email' />
                <textarea type="text" placeholder='Ingresa tu mensaje' className='contact_message'></textarea>
            </div>
            <button className='contact_submit_button'>Enviar</button>

        </div>
        

       
      </div>
      <div className="contact_other_info">
        <div className="contact_location_container">
        <i className="fa-solid fa-location-dot location_contact_icon"></i>
        <div className="contact_location_container_content">
          <h5>Ubicación</h5>
          <p>Ni idea</p>
        </div>
        </div>
        <div className="contact_phone_container">
        <i className="fa-solid fa-phone phone_contact_icon"></i>
       
        <div className="contact_phone_container_content">
          <h5>Teléfono</h5>
          <p>+57 317 7701741</p>
        </div>
        
        </div>
        <div className="contact_phone_container">
        <i className="fa-solid fa-envelope mail_contact_icon"></i>
       
        <div className="contact_email_container_content">
          <h5>Correo</h5>
          <p>optibelleza@gmail.com</p>
        </div>
        
        </div>

      </div>
    </section>
  )
}

export default Contact