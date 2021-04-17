import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import './ItemDetail.css';


const ItemDetail = ({ item, show, handleClose }) => {

  const showHideClassName = show ? "modal display-block" : "modal display-none";
  
  return (
    <div className={showHideClassName}>
      <section className="modal-main">

        <center>
          <div className="modal-content">
            
          <button type="button" className="close-btn" aria-label="Close" onClick={handleClose}>&times;</button>
            
            <div className="item-details-card-left">
              <div className="item-details-image-container">
                <img className="modal-card-img-top" src={item.img_url} alt="" />
              </div>
            </div>

            <div className="item-details-card-right">
              <div className="item-details-name-container">
                <h3 className="item-details-name">{item.name}</h3><br />
              </div>

              <div className="item-details-card-price">
                <p className="item-details-card-price">
                  {item.price}
                </p>
              </div>

              <div className="item-details-description-container">
                <p className="item-details-description-text">
                  {item.description}
                </p>
              </div>


              <div className="add-to-cart-button">
  
                 <button className="cart-btn">ADD TO CART</button>
          
              </div>
            </div>

          </div>
        </center>
      </section>

    </div>
  )
}

export default ItemDetail
