// Die Sidebar am linken Rand, über die verschiedene Filter ausgewählt werden.
// https://rapidapi.com/guides/send-query-parameters-axios
// https://www.aspsnippets.com/Articles/Get-multiple-selected-checked-CheckBox-values-as-Comma-Separated-String-using-JavaScript.aspx

import React, {useEffect, useState} from 'react'

const Sidebar = ({getFilterFunction}) => {

  const [filter, setFilter] = useState("")



    // die folgende Funktion nimmt den value der Filter (f) aus der Funktion unten und gibt ihn an die setText Funktion
    // damit wird variable "text" aktualisiert
    // const updateFilter = ({f})=>{
    //   setFilter(f);
      // getFilter(f);
  // }

const GetSelected = () => {

  var selected = [];

  var sidebarForm =document.getElementById("sidebarForm");

  var checks = sidebarForm.getElementsByTagName("input");

  for (var i = 0; i < checks.length; i++) {
    if (checks[i].checked) {
      selected.push(checks[i].value);
    }}
    if (selected.length >= 0) {
      setFilter(selected.join(","));
      console.log("das sind die Filter:" + filter);

    }
 
  }

  // der folgende useEffect Hook wird beim (re)render der Sidebar ausgeführt.
  // er nimmt den aktuellen filter-value und gibt ihn an die getFilterFunction und damit an die Parent Component
useEffect(()=>{
  console.log("das sind die Filter nach useEffect" + filter);
  getFilterFunction(filter);

  ;

})




  return (
    <section className='sidebar'>
      <form id="sidebarForm">
      <ul className='filter'>
        <li className='category'>Altersgruppe</li>
        <input type="checkbox" name="under_3" value="under_3" id="under_3Button"/>
        <label htmlFor="under_3Button">bis 3 Jahre</label><br/>
        <input type="checkbox" name="over_3" value="over_3" id="over_3Button"/>
        <label htmlFor="over_3Button">ab 3 Jahre</label><br/>

        <li className='category'>Kompetenz</li>
        <input type="checkbox" name="logic" value="logic" id="logicButton"/>
        <label htmlFor="logicButton">Logik</label><br/>
        <input type="checkbox" name="social" value="social" id="socialButton"/>
        <label htmlFor="socialButton">Sozial</label><br/>
        <input type="checkbox" name="movement" value="movement" id="movementButton"/>
        <label htmlFor="movementButton">Bewegung</label><br/>
        <input type="checkbox" name="music" value="music" id="musicButton"/>
        <label htmlFor="musicButton">Musik</label><br/>
        <input type="checkbox" name="science" value="science" id="scienceButton"/>
        <label htmlFor="scienceButton">Wissen</label><br/>
        <input type="checkbox" name="creativity" value="creativity" id="creativityButton"/>
        <label htmlFor="creativityButton">Kreativität</label><br/>


        <li className='category'>Ort</li>
        <input type="checkbox" name="inside" value="inside" id="logicButton"/>
        <label htmlFor="inside">drinnen</label><br/>
        <input type="checkbox" name="outside" value="outside" id="logicButton"/>
        <label htmlFor="inside">draußen</label><br/>
        <button type="button" onClick = {()=>GetSelected()}>Filter</button>

      </ul>
      </form>
    </section>
  )
}

export default Sidebar