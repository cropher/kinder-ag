// Das Raster, in dem die einzelnen Cards angezeigt werden.
import React from 'react'
import Card from "./Card"

// Die Component empfängt die items sowie die onItemClick-Funktion als Props aus der Parent Component.
// Die map Funktion gibt die items als array wieder und mapt jedes item mit einer Card und gibt das item an diese als prop weiter.
// Außerdem wird jedes Mal die onItemClick-Funktion, die in der Parent definiert wurde, als prop zur Card weitergegeben.
const Grid = ({ items, onItemClick }) => {
  return (
    <section className='GridSection'>
      {items.map((item) => (
        <Card key={item.id} item={item} onClick={() => onItemClick(item._id, items)}></Card>))}

    </section>)

}

export default Grid