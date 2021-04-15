import React from 'react'


const ItemDetail = ({ item }) => {


  
  return (
    <div className="item-details-page">
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

    </div>
  )
}

export default ItemDetail
