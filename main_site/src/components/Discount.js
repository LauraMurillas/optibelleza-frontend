import React , { useState, useEffect, useRef }from 'react'

import "./css/Discount.css"
const Discount = () => {
    const [active_subscribe,set_active_subscribe]=useState(false)
    const [overlay_active,set_overlay_active]=useState(false)
    const active_subscribe_conatiner=()=>{
        set_overlay_active(true)
        set_active_subscribe(true)
        setTimeout(()=>{
          set_overlay_active(false)
        },1200)

    }
    const deactive_subscribe_conatiner=()=>{
      set_overlay_active(true)
      set_active_subscribe(false)
      setTimeout(()=>{
        set_overlay_active(false)
      },1200)
      
  }
  return (
    <div className='outer_discount_container'>
        
        <div className="discount_container">
            
           <div className="discount_inner_container">
           <div className={`subscribe_overlay ${overlay_active===true?"dective_subscribe_overlay":""}`}></div>
           <div className={`subscribe_container ${active_subscribe===true?"active_subscribe_container":""}`}>
           <i onClick={deactive_subscribe_conatiner}className="fa-solid fa-arrow-left back_subscribe"></i>
               
                <div className="subscribe_content">
                    <label>Entérate de lo nuevo</label>
                    <div className="subscribe_contnet_container">
                    <input placeholder="Ingresa tu correo electrónico" type="text" className='new_settler_email' />
                    <button className='subscribe'>SUBSCRIBETE</button>
                    </div>
                </div>
            </div>
                <div className={`discount_content ${active_subscribe===true?'hide_discount_content':""}`}>  
                     <h2> transformar la forma en la que miras el mundo</h2>
                     <h1>Obtén un <span>15% de descuento</span> en productos destacados</h1>
                     </div>
                  <button onClick={active_subscribe_conatiner} className={`New_settler ${active_subscribe===true?'hide_discount_content':""}`}>SUBSCRIBE</button>
            </div> 
      </div>
    </div>
  )
}

export default Discount