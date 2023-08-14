// Die Sidebar am linken Rand, über die verschiedene Filter ausgewählt werden.

import React from 'react'

const Sidebar = () => {
  return (
    <section className='sidebar'>
      <form id="sidebarForm">
      <ul className='filter'>
        <li className='category'>Altersgruppe</li>
        <button type="button">bis 3 Jahre</button>
        <button type="button">ab 3 Jahre</button>

        <li className='category'>Kompetenz</li>
        <button type="button">Logik</button>
        <button type="button">Sozial</button>
        <button type="button">Bewegung</button>
        <button type="button">Musik</button>
        <button type="button">Wissen</button>
        <button type="button">Kreativität</button>


        <li className='category'>Ort</li>
        <button type="button">drinnen</button>
        <button type="button">draußen</button>
      </ul>
      </form>
    </section>
  )
}

export default Sidebar