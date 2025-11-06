import React, { useState, useEffect } from 'react';
import "../components/css/MobileMenu.css";

const MobileMenu = (props) => {
  const [change_tab, set_change_tab] = useState(1);
  const [closingMenu, setClosingMenu] = useState(false);

  useEffect(() => {
    if (!props.open_mobile_menu) {
      // Set a short delay before resetting the closingMenu state
      const timeout = setTimeout(() => {
        setClosingMenu(false);
      }, 300); // Adjust the delay as needed
      return () => clearTimeout(timeout);
    }
  }, [props.open_mobile_menu]);

  const handleTabClick = (tabNumber) => {
    if (!closingMenu) {
      set_change_tab(tabNumber);
      props.set_open_mobile_menu(false);
      setClosingMenu(true);
    }
  };
  const active_load_overlay_conatiner=()=>{
    handleTabClick(4)
    props.set_load_overlay_active(true)
    props.set_active_cart_page_show("cart")
    
    
    setTimeout(()=>{
      props.set_load_overlay_active(false)
    },1000)}

    const active_about_page=()=>{
      handleTabClick(2)
      props.set_load_overlay_active(true)
      props.set_active_about_page_show("about")
      
      
      setTimeout(()=>{
        props.set_load_overlay_active(false)
      },1000)}  
      const active_all_products_page=()=>{
        handleTabClick(3)
        props.set_load_overlay_active(true)
        props.set_active_all_product_page_show("all_products")
        
        
        
        
        setTimeout(()=>{
          props.set_load_overlay_active(false)
        },1000)} 
        
        
        const active_checkout_page=()=>{
          handleTabClick(5)
          props.set_load_overlay_active(true)
          props.set_active_orders_page_show("checkout")
          
          
          setTimeout(()=>{
            props.set_load_overlay_active(false)
          },1000)}  
  return (
    <div className={`mobile_menu_container ${props.open_mobile_menu ? "open_mobile_menu" : ""}`}>
      <i className="fa-solid fa-arrow-left back_mobile_menu" onClick={() => { props.set_open_mobile_menu(false) }}></i>
      <h5 className='menu_heading'>Nuestro <span>Menú</span></h5>
      <div className="menu_content">
        <div className="menu_tab" onClick={() => handleTabClick(1)} style={{ backgroundColor: change_tab === 1 ? "#292929" : "", color: change_tab === 1 ? "#cfad4c" : "", pointerEvents: closingMenu ? "none" : "auto" }}><i class="fa-solid fa-house"></i> <h5>Inicio</h5></div>
        <div className="menu_tab" onClick={active_about_page} style={{ backgroundColor: change_tab === 2 ? "#292929" : "", color: change_tab === 2 ? "#cfad4c" : "", pointerEvents: closingMenu ? "none" : "auto" }}><i class="fa-solid fa-circle-info"></i> <h5>Sobre Nosotros</h5></div>
        <div className="menu_tab" onClick={active_all_products_page} style={{ backgroundColor: change_tab === 3 ? "#292929" : "", color: change_tab === 3 ? "#cfad4c" : "", pointerEvents: closingMenu ? "none" : "auto" }}><i class="fa-solid fa-bag-shopping"></i><h5>Tienda</h5></div>
        <div className="menu_tab" onClick={active_load_overlay_conatiner} style={{ backgroundColor: change_tab === 4 ? "#292929" : "", color: change_tab === 4 ? "#cfad4c" : "", pointerEvents: closingMenu ? "none" : "auto" }}><i class="fa-solid fa-cart-shopping"></i><h5>Carrito</h5></div>
        <div className="menu_tab" onClick={active_checkout_page} style={{ backgroundColor: change_tab === 5 ? "#292929" : "", color: change_tab === 5 ? "#cfad4c" : "", pointerEvents: closingMenu ? "none" : "auto" }}><i class="fa-solid fa-clipboard"></i><h5>Mis Pedidos</h5></div>
        <div className="menu_tab" onClick={() => handleTabClick(6)} style={{ backgroundColor: change_tab === 6 ? "#292929" : "", color: change_tab === 6 ? "#cfad4c" : "", pointerEvents: closingMenu ? "none" : "auto" }}> <i class="fa-solid fa-address-book"></i><h5>Contacto</h5></div>
      </div>
    </div>
  );
};

export default MobileMenu;