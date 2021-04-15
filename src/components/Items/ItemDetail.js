import React from 'react'
import { useHistory } from 'react-router';

const ItemDetail = ({ item }) => {

 
  
  return (
    <div className="item-details-page">
      <section className="modal-main">
        <center>
          <h3 className="item-name">{item.name}</h3><br />
          <img className="modal-card-img-top" src={item.img_url} alt="" />
        </center>
      </section>
    </div>
  )
}

export default ItemDetail
