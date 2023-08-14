// Karte, die durch Anklicken den dazugehörigen Artikel aufruft.
// import React from 'react'
// import CharacterItem from './CharacterItem'
// import Spinner from '../ui/Spinner'

// const CharacterGrid = ({ items, isLoading }) => {
//   return isLoading ? (
//     <Spinner />
//   ) : (
//     <section className='cards'>
//       {items.map((item) => (
//         <CharacterItem key={item.char_id} item={item}></CharacterItem>
//       ))}
//     </section>
//   )
// }

import React from 'react'

const CharacterItem = ({ item }) => {
  return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={item.img} alt='' />
        </div>
        <div className='card-back'>
          <h1>{item.name}</h1>
          <ul>
            <li>
              <strong>Aktivität:</strong> {item.activity}
            </li>
            <li>
              <strong>Altersgruppe:</strong> {item.age}
            </li>
            <li>
              <strong>Kategorie:</strong> {item.competence}
            </li>
            <li>
              <strong>Status:</strong> {item.status}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CharacterItem