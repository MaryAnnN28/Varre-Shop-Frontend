import React from 'react'; 
import './Items.css';



const ItemsDisplay = ({ item }) => {
  return (
    <>
      <div className="item-grid">
      
        <div className="item-card">
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
    
  </>
  )
}

export default ItemsDisplay; 
