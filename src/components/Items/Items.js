import React, { useState } from 'react';
import ItemsDisplay from './ItemsDisplay'
import Filter from '../Filter/Filter'
import ItemDetail from './ItemDetail'

const Items = ({ items, sort, handleSort }) => {

  const [page, setPage] = useState(1)
  const [show, setShow] = useState(false); 
  const [filterPrice, setFilterPrice] = useState("")
  const [filterNewest, setFilterNewest] = useState("")
  const [filterCategory, setFilterCategory] = useState("")
  const [filterColor, setFilterColor] = useState("")


  const filterItems = () => {
    let filterItems = items
    if (filterPrice && filterPrice !== "All") {
      filterItems = filterItems.filter()
    }
 
  }
  return (
    <>
      <Filter
        items={items}
        sort={sort}
        handleSort={handleSort}
        filterPrice={filterPrice}
        setFilterPrice={setFilterPrice}
        />

     <div className="item-grid">
      {items.map(item =>
        <ItemsDisplay key={item.id} item={item}/>
      )}

      </div>
      {items.map(item =>
        <ItemDetail show={show} handleClose={() => setShow(false)} item={item} />
      )}
    </>
  )
}

export default Items; 
