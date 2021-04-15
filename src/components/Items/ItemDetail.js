import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';


const ItemDetail = ({ item, show, handleClose }) => {

  const showHideClassName = show ? "modal display-block" : "modal display-none";
  
  return (
    <div className={showHideClassName}>
      <section className="modal-main">

        <center>
          
          <div className="item-image-container">
            <img className="modal-card-img-top" src={item.img_url} alt="" />
          </div>

          <div className="item-name-container">
            <h3 className="item-name">{item.name}</h3><br />
          </div>

          <div className="item-description-container">
            <p className="item-description-text">
              {item.description}
            </p>
          </div>

          <div className="item-detail-price">
            <p className="item-detail-price">
              Price: {item.price}
            
            </p>
          </div>

        </center>
      </section>

    </div>
  )
}

export default ItemDetail
