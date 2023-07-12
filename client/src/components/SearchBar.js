// Die Search-Bar, über die Keywords eingegeben werden.

import React, {useState} from 'react'


const SearchBar = () => {

    const [text, setText] = useState("")
    const onChange = (q)=>{
        setText(q)
    }

    return (
        <section className="searchbar">
            <form>   
                <input
                type="text"
                value={text}
                placeholder="Aktivitäten suchen"
                onChange={(e)=>onChange(e.target.value)}
                />
            </form>
        </section>
    )
}

export default SearchBar