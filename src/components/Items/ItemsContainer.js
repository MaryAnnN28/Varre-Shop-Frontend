import React, { useState } from 'react';
import ItemsDisplay from './ItemsDisplay'
import Filter from '../Filter/Filter'


const ItemsContainer = ({ items, sort, handleSort }) => {

  const [filterCategory, setFilterCategory] = useState("")
  const [filterColor, setFilterColor] = useState("")
  const [sortNewest, setSortNewest] = useState("")
  const [sortPrice, setSortPrice] = useState("")


  const filterItems = () => {
    let filterItems = items
    if (filterCategory && filterCategory !== "All") {
      filterItems = filterItems.filter(item => item.name.includes(filterCategory))
    }
    if (filterColor && filterColor !== "All") {
      filterItems = filterItems.filter(item => item.color.includes(filterColor))
    }
    
    switch (sort) {
      case "Price_Low_To_High":
        return filterItems.sort((a, b) => a.price > b.price ? 1 : -1)
      case "Price_High_To_Low":
        return filterItems.sort((a, b) => a.price > b.price ? -1 : 1)
      case "Newest":
        return filterItems.sort((a, b) => a.created_at > b.created_at ? -1 : 1)
      case "Oldest":
        return filterItems.sort((a, b) => a.created_at > b.created_at ? 1 : -1)
      case "None":
        return filterItems
    }
    return filterItems
  }
  
  return (
    <>
      <Filter
        items={items}
        filterItems={filterItems}
        sort={sort}
        handleSort={handleSort}
        filterCategory={filterCategory}
        setFilterCategory={setFilterCategory}
        filterColor={filterColor}
        setFilterColor={setFilterColor}
        />

     <div className="item-grid">
      {items.map(item =>
        <ItemsDisplay key={item.id} item={item}/>
      )}

      </div>
  
    </>
  )
}

export default ItemsContainer; 
