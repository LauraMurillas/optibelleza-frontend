import React from 'react'
import "./css/WhyUS.css"


const WhyUS = () => {
  return (
    <div className='whyus_outer_container'>
        <div className='whyus_heading_container'>
        <h4 className='whyus_main_heading'>¿Por qué <span>Nosotros?</span></h4>
        <h4 className='whyus_tag_line'>Experimenta la Diferencia: Elevando tu mirada con Confort, Estilo y Calidad Inigualables</h4>
        </div>
        <div className="whyus_content_container">
            <div className="whyus_box1">
            <i class="fa-solid fa-feather-pointed"></i>
            <h4>Calidad y Confort</h4>
            <p>Experimenta una calidad y confort inigualables con nuestros marcos para gafas. Elaborados con precisión y diseñados para tu máxima satisfacción, nuestros marcos garantizan lujo y comodidad día a día. Siente la diferencia
              , mientras nuestro compromiso con la excelencia eleva tu confort a nuevas alturas</p>

            </div>

            <div className="whyus_box1">
            <i class="fa-solid fa-globe"></i>
            <h4>Diseño y Construcción</h4>
            <p>Experimenta la máxima expresión de estilo contemporáneo fusionado con una artesanía innovadora. Nuestros marcos meticulosamente diseñados combinan una estética elegante cuidando la salud de tus ojos, asegurando una durabilidad y comodidad inigualables.
                Recomendados por oftalmólogos, encarna la elegancia moderna y la calidad premium</p>
            </div>

            <div className="whyus_box1">
            <i class="fa-solid fa-layer-group"></i>
            <h4>Variedad y Selección</h4>
            <p>Explora opciones ilimitadas con nuestra variedad de marcos y selección curadas. Desde clásicos atemporales hasta tendencias contemporáneas, encuentra el ajuste perfecto para tu estilo y necesidades de confort. Descubre la calidad artesanal y tamaños diversos para cada rostro, asegurando una experiencia personalizada con cada paso.</p>

            </div>
        </div>

      
    </div>
  )
}

export default WhyUS