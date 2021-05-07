import React, { useState, useEffect } from 'react';
import ItemsDisplay from './ItemsDisplay'
import Filter from '../Filter/Filter'
import axios from 'axios';


const ItemsContainer = ({ }) => {

  const [items, setItems] = useState([])
  const [sort, setSort] = useState("All")
  const [filterCategory, setFilterCategory] = useState("")
  const [filterColor, setFilterColor] = useState("")

  useEffect(() => {
    axios.get('http://localhost:3000/items')
      .then(resp => setItems(resp.data))
      .catch(resp => console.log(resp))
  }, [items.length])


  const filterItems = () => {
    let filterItems = items
    if (filterCategory && filterCategory !== "All") {
      filterItems = filterItems.filter(item => item.category.includes(filterCategory))
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
    <div>
      <Filter
        items={items}
        filterItems={filterItems}
        sort={sort}
        setSort={setSort}
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
  
    </div>
  )
}

export default ItemsContainer; 
