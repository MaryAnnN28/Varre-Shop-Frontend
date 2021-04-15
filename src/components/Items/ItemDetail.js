import React from 'react'
import { useHistory } from 'react-router';

const ItemDetail = ({ show, handleClose, item }) => {

  const showHideClassName = show ? "modal display-block" : "modal display:none";
  const history = useHistory();
  
  return (
    <div>
      Item Details / MODAL
    </div>
  )
}

export default ItemDetail
