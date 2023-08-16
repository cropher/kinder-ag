// Karte, die durch Anklicken den dazugehörigen Artikel aufruft.

import React from 'react'

// das item wird als prop an die Card gegeben, wo dessen Bestandteile (z.B. item.title) angezeigt werden können.
// außerdem wird die onClick-Funktion gecallt, die in der Parent-Component definiert wurde; dabei wird das item der Card an diese weitergegeben.
const CharacterItem = ({ item, onClick }) => {
  return (
    <button className='card' onClick={onClick}>
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
    </button>
  )
}

export default CharacterItem