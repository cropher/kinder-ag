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
    if (selected.length > 0) {
      setFilter(selected.join(","));
      getFilterFunction(filter);
      console.log("das sind die Filter:" + selected.join(","));

    }
  }

// useEffect(()=>{
//   changedFilters(filter);

// })




  return (
    <section className='sidebar'>
      <form id="sidebarForm">
      <ul className='filter'>
        <li className='category'>Altersgruppe</li>
        <input type="checkbox" name="under_3" value="under_3"/>
        <label htmlFor="inside">bis 3 Jahre</label><br/>
        <input type="checkbox" name="over_3" value="over_3"/>
        <label htmlFor="inside">ab 3 Jahre</label><br/>

        <li className='category'>Kompetenz</li>
        <input type="checkbox" name="logic" value="logic"/>
        <label htmlFor="inside">Logic</label><br/>
        <input type="checkbox" name="social" value="social"/>
        <label htmlFor="inside">Sozial</label><br/>
        <input type="checkbox" name="movement" value="movement"/>
        <label htmlFor="inside">Bewegung</label><br/>
        <input type="checkbox" name="music" value="music"/>
        <label htmlFor="inside">Musik</label><br/>
        <input type="checkbox" name="science" value="science"/>
        <label htmlFor="inside">Wissen</label><br/>
        <input type="checkbox" name="creativity" value="creativity"/>
        <label htmlFor="inside">Kreativität</label><br/>


        <li className='category'>Ort</li>
        <input type="checkbox" name="inside" value="inside"/>
        <label htmlFor="inside">drinnen</label><br/>
        <input type="checkbox" name="outside" value="outside"/>
        <label htmlFor="inside">draußen</label><br/>
        <button type="button" onClick = {()=>GetSelected()}>Filter</button>

      </ul>
      </form>
    </section>
  )
}

export default Sidebar