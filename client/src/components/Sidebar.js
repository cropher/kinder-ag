// Die Sidebar am linken Rand, über die verschiedene Filter ausgewählt werden.

import React from 'react'

const Sidebar = () => {
  return (
    <section className='sidebar'>
      <ul className='filter'>
        <li className='category'>Altersgruppe</li>
        <button type="button">0-2 Jahre</button>
        <button type="button">3-5 Jahre</button>
        <button type="button">6-8 Jahre</button>
        <button type="button">9-12 Jahre</button>

        <li className='category'>Kompetenz</li>
        <button type="button">motorisch</button>
        <button type="button">sprachlich</button>
        <button type="button">kognitiv</button>
        <button type="button">sozial</button>

        <li className='category'>Ort</li>
        <button type="button">drinnen</button>
        <button type="button">draußen</button>
      </ul>
    </section>
  )
}

export default Sidebar