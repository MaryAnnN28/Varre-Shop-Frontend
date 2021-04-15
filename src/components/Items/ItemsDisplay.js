import React, { Fragment, useState, useRef } from 'react';
import ItemDetail from './ItemDetail'
import './Items.css';



const ItemsDisplay = ({ item }) => {

  const [show, setShow] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const onClose = () => setIsOpen(false)


  return (
    <>
      <div className="item-grid">
      
        <div className="item-card" onClick={() => setShow(true)}>
          <div className="item-card-img">
            <img className="item-img" src={item.img_url} width="300px" alt="painting-item" />
          </div>
          <div className="item-card-details">
            <div className="item-card-title">
              <p className="item-title">{item.name}</p>
            </div>
            <div className="item-card-price">
              <p className="item-price">{item.price}</p>
            </div>
          </div>
        </div>
      </div>
      <Fragment>
        {/* <ItemDetail
          item={item}
          show={show}
          handleClose={() => setShow(false)}
        
        /> */}
      </Fragment>
    
  </>
  )
}

export default ItemsDisplay; 
