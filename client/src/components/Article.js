// Hiermit wird der geladene Artikel dargestellt.
import React from 'react'

const Article = ({ item, onClose }) => {
  console.log(item);
  if (!item) return null
  return (
    <div className='article'>
        <h1>{item.title}</h1>
        <h2>Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular.</h2>
        {/* <div dangerouslySetInnerHTML={{__html: item.body}} /> */}
      <button onClick={onClose}>Close</button>   
    </div>
  )
}

export default Article