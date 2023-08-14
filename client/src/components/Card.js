// Karte, die durch Anklicken den dazugehörigen Artikel aufruft.

import React from 'react'

const CharacterItem = ({ item }) => {
  return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={item.img} alt='' />
        </div>
        <div className='card-back'>
          <h1>{item.title}</h1>
          <ul className="Items">


          </ul>
        </div>
      </div>
    </div>
  )
}

export default CharacterItem