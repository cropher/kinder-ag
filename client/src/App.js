//https://codepen.io/kokoz/pen/PowpXvG
//https://www.youtube.com/watch?v=KRJvlxhLXxk
//https://www.youtube.com/watch?v=t3UjWbh7mqI
//https://www.youtube.com/watch?v=sWVgMcz8Q44

import './App.css';
import React, {useState, useEffect} from 'react';
import axios from "axios";
//import {MongoClient} from "mongodb";
import SearchBar from './components/SearchBar';
import Sidebar from "./components/Sidebar";
import Footer from "./components/footer.jsx";


function App() {

// der folgende useState Hook wird benutzt, um das query durch die Texteingabe zu updaten
// das query wird in der URL verwendet, mit der die Daten aus der API abgerufen werden
  const [query, setQuery] = useState("")

  // wir nutzen einen useEffect Hook, um die component mit der API zu synchronisieren

  useEffect (()=>{
    const fetchItems = async () =>{
      
      
      try {
        const result = await axios.get (`https://jsonplaceholder.typicode.com/users?name=${query}`)
        console.log(result.data)
        console.log(query)
      }
      catch (error){
        console.log(error);
      }    }
      fetchItems()
    }, [query])

    const queryFunction = (q) => {
      setQuery(q)
    }

  return (
    <div className='App'>
      <body>
        <section className='search'>
          <SearchBar getQuery={queryFunction}/>
        </section>
        <section className='content'>
         <Sidebar/>
          {/* <Article/> */}
        </section>
        <section className='footer-area'>
        <Footer/>
        </section>
          

      </body>

    </div>
  );
}

export default App;

