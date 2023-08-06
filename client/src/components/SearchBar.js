// Die Search-Bar, über die Keywords eingegeben werden.

import React, {useState} from 'react'
import searchIcon from "../img/searchIcon.svg"


const SearchBar = ({getQuery}) => {

    // der usestate hook wird definiert
    const [text, setText] = useState("")

    // die folgende Funktion nimmt den value der Texteingabe (q) aus der Funktion unten und gibt ihn an die setText Funktion
    // damit wird variable "text" aktualisiert
    const onChange = (q)=>{
        setText(q)
        getQuery(q)
    }

    // hier wird die SearchBar definiert
    // sie enthält ein onChange event. Wenn in die SearchBar text eingegeben wird, löst dies die obige Funktion aus.
    // der value der Texteingabe (e.target.value) wird dabei als prop an die obige Funktion gegeben.
    return (
        <section className="searchbar">
            <form>   
                <input
                type="text"
                value={text}
                placeholder="Aktivitäten suchen"
                onChange={(e)=>onChange(e.target.value)}
                />
                <img src={searchIcon} className='icon' alt="search icon"/>
            </form>
        </section>
    )
}

export default SearchBar