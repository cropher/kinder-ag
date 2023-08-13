// Damit man die Searchbar/Sidebar testen kann, ist das Ausführen des lokalen Clients und Servers erforderlich
// Dazu wählt man in VS Code: Terminal > Split Terminal
// in dem einen Terminal führt man den Befehl "cd server" aus. Via "npm install" müssen ggf. fehlende Packages installiert werden. Dann startet man die server app mit "node app"
// in dem anderen Terminal führt man den Befehl "cd client" aus. Via "npm install" müssen ggf. fehlende Packages installiert werden. Dann startet man die client app durch "npm start"
// außerdem ist das in dem folgenden Artikel beschriebene Browser-Plugin erforderlich:
// https://medium.com/@dtkatz/3-ways-to-fix-the-cors-error-and-how-access-control-allow-origin-works-d97d55946d9

import './App.css';
import React, {useState, useEffect} from 'react';
import axios from "axios";
import SearchBar from './components/SearchBar';
import Sidebar from "./components/Sidebar";
import Footer from "./components/footer.jsx";
import Navigation from './components/Navigation';
// import Article from "./components/Article";


function App() {

// der folgende useState Hook wird benutzt, um das query durch die Texteingabe zu updaten
// das query wird in der URL verwendet, mit der die Daten aus der API abgerufen werden
  const [query, setQuery] = useState("")

// wir nutzen einen useEffect Hook, um die component mit der API zu synchronisieren
// axios schickt einen GET request an die search-URL des servers
// der query wird als search parameter angehängt, sodass der server danach sucht
// die Antwort des servers wird momentan nur in der consolte geloggt; zu Testzwecken zusammen mit dem query, damit man den ggf. prüfen kann
  useEffect (()=>{
    const fetchItems = async () =>{
      
      
      try {
        const response = await axios.get (`http://localhost:5000/articles/search`
        ,{
          params:{search: (query)
          }
      }
      )
      console.log(response);
      console.log(query);
       
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
        <section className='navigation'>
          <Navigation/>
        </section>
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

