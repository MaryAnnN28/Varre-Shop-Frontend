import React from 'react';
import ItemsDisplay from './ItemsDisplay'
import Filter from '../Filter/Filter'

const Items = ({ items, sort, handleSort }) => {
  return (
    <>
      <Filter
        items={items}
        sort={sort}
        handleSort={handleSort} />


     <div className="item-grid">
      {items.map(item =>
        <ItemsDisplay key={item.id} item={item}
          
        />
      )}
    
       
     
       
      </div>
    </>
  )
}

export default Items; 
