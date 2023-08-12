// Das Raster, in dem die einzelnen Cards angezeigt werden.
import React from 'react'
import Card from "./Card"

const Grid = ({items}) => {
  return (
    <section className='GridSection'>
        {items.map((item)=>(
        <Card key={item.id} item={item}></Card>))}
        
    </section>)
  
}

export default Grid