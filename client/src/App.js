import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import Sidebar from "./components/Sidebar";
// import Article from "./components/Article";
import Footer from "./components/footer.jsx";


function App() {

  // der folgende useState Hook wird benutzt, um das query durch die Texteingabe zu updaten
  // das query wird in der URL verwendet, mit der die Daten aus der API abgerufen werden
  const [query, setQuery] = useState("")

  // wir nutzen einen useEffect Hook, um die component mit der API zu synchronisieren

  useEffect (()=>{
    const fetchItems

  })

  return (
    <div className='App'>
      <body>
        <section className='search'>
          <SearchBar/>
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

