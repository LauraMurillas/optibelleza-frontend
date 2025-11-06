import React from 'react'
import "../components/css/About.css"
const About = (props) => {
    const deactive_about_page=()=>{
        
        props.set_load_overlay_active(true)
        props.set_active_about_page_show("")
        props.set_fitem_active(0)
        
        setTimeout(()=>{
          props.set_load_overlay_active(false)
        },1000)}  
    return (
        <div className={`about_outer_container ${props.active_about_page_show === "about" ? "open_about_page" : ""}`}>
            <i  onClick={deactive_about_page} className="fa-solid fa-arrow-left about_back"></i>
            <h1 className='about_main_heading'><span>Sobre</span> Nosotros</h1>
        <div className="about_main_content_container">
            <div className="about_inner_container">

                <div className="about_shoes_design_container1">
                    <div className="about_design"></div>
                    <div className="about_shoes_container">
                        <img src="/about_shoes.png" className='about_shoes_image' />
                    </div>
                </div>

                <div className="about1_content">
                    <h1 className='about1_heading'>Nuestro <span>Objetivo</span></h1>
                    <div className="about1_main_para">
                        <p>En OptiBelleza, nuestro objetivo es convertirnos en tu destino preferido para todas tus necesidades de marcos para gafas. Nos esforzamos por ofrecer una extensa selección de marcos que se adapten a cada estilo, ocasión y presupuesto, asegurando que encuentres exactamente lo que estás buscando.</p>
                        <p>Estamos dedicados a proporcionar un servicio al cliente excepcional, experiencias de compra fluidas y orientación experta para ayudarte a hacer la elección perfecta. Nuestro objetivo es superar tus expectativas en cada paso de tu experiencia con nosotros.</p>
                    </div>
                </div>

            </div>

            <div className="about_inner_container2">

                <div className="about_shoes_design_container2">
                    <div className="about_design"></div>
                    <div className="about_shoes_container">
                        <img src="/about2_image.png" className='about2_image' />
                    </div>
                </div>

                <div className="about2_content">
                    <h1 className='about2_heading'>Nuestra <span>Misión</span></h1>
                    <div className="about2_main_para">
                        <p>En OptiBelleza, nuestra misión es ofrecer una experiencia única en la selección de marcos para gafas, combinando calidad premium, diseño innovador y atención personalizada. Nos esforzamos por hacer que cada cliente encuentre el marco perfecto que realce su estilo personal y satisfaga sus necesidades visuales.</p>
                        <p>Creemos que las gafas son más que una necesidad visual; son una expresión de tu personalidad. Por eso, trabajamos continuamente para traerte las últimas tendencias y los diseños más innovadores, manteniendo siempre los más altos estándares de calidad y servicio.</p>
                    </div>
                </div>

            </div>
            </div>
        </div>
    )
}

export default About