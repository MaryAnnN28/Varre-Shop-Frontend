import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import './ItemDetail.css';


const ItemDetail = ({ item, show, handleClose }) => {

  const showHideClassName = show ? "modal display-block" : "modal display-none";
  
  return (
    <div className={showHideClassName}>
      <section className="modal-main">

        <center>
          <div className="item-details-card">
            
            <div className="item-details-card-left">
              <div className="item-details-image-container">
                <img className="modal-card-img-top" src={item.img_url} alt="" />
              </div>
            </div>

            <div className="item-details-card-right">
              <div className="item-details-name-container">
                <h3 className="item-details-name">{item.name}</h3><br />
              </div>

              <div className="item-details-description-container">
                <p className="item-details-description-text">
                  {item.description}
                </p>
              </div>

              <div className="item-details-card-price">
                <p className="item-detail-card-price">
                  {item.price}
                </p>
              </div>
            </div>

          </div>
        </center>
      </section>

    </div>
  )
}

export default ItemDetail
