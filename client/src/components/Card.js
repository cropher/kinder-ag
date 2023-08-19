// Karte, die durch Anklicken den dazugehörigen Artikel aufruft.

import React from 'react'

// das item wird als prop an die Card gegeben, wo dessen Bestandteile (z.B. item.title) angezeigt werden können.
// außerdem wird die onClick-Funktion gecallt, die in der Parent-Component definiert wurde; dabei wird das item der Card an diese weitergegeben.
const CharacterItem = ({ item, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <div className="cardImageContainer">
      <img src={item.image} className='cardImage'></img>
      </div>

    <div className='cardButton' >

          {item.title}

    </div>
    </div>
  )
}

export default CharacterItem