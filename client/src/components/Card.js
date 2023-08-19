// Karte, die durch Anklicken den dazugehörigen Artikel aufruft.

import React from 'react'

// das item wird als prop an die Card gegeben, wo dessen Bestandteile (z.B. item.title) angezeigt werden können.
// außerdem wird die onClick-Funktion gecallt, die in der Parent-Component definiert wurde; dabei wird das item der Card an diese weitergegeben.
const CharacterItem = ({ item, onClick }) => {
  return (
    <div className="card">

    <button className='cardButton' onClick={onClick}>

          {item.title}

    </button>
    </div>
  )
}

export default CharacterItem