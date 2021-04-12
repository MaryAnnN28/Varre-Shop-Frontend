import React, { useState } from 'react';
import ItemsDisplay from './ItemsDisplay'
import Filter from '../Filter/Filter'

const Items = ({ items, sort, handleSort }) => {

  const [filterPrice, setFilterPrice] = useState("")
  const [filterNewest, setFilterNewest] = useState("")
  const [filterCategory, setFilterCategory] = useState("")
  const [filterColor, setFilterColor] = useState("")


  const filterItems = () => {
    let filterItems = items.filter(item =>
      item.name.toLowerCase().includes())
    if (filterPrice && filterPrice !== "All") {
      filterItems = filterItems.filter()
    }
  }
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
