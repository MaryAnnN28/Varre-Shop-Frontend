import React from 'react';
import ItemsDisplay from './ItemsDisplay'

const Items = ({ items }) => {
  return (
    <div>
      
      {items.map(item =>
        <ItemsDisplay key={item.id} item={item}
          
        />
      )}
    
       
     
       
    </div>
  )
}

export default Items; 
