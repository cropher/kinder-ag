// Damit man die Searchbar/Sidebar testen kann, ist das Ausführen des lokalen Clients und Servers erforderlich
// Dazu wählt man in VS Code: Terminal > Split Terminal
// in dem einen Terminal führt man den Befehl "cd server" aus. Via "npm install" müssen ggf. fehlende Packages installiert werden. Dann startet man die server app mit "node app"
// in dem anderen Terminal führt man den Befehl "cd client" aus. Via "npm install" müssen ggf. fehlende Packages installiert werden. Dann startet man die client app durch "npm start"
// außerdem ist das in dem folgenden Artikel beschriebene Browser-Plugin erforderlich:
// https://medium.com/@dtkatz/3-ways-to-fix-the-cors-error-and-how-access-control-allow-origin-works-d97d55946d9

import './App.css';
import React, {useState, useEffect, useCallback} from 'react';
import axios from "axios";
import SearchBar from './components/SearchBar';
import Sidebar from "./components/Sidebar";
import Footer from "./components/footer.jsx";
import Navigation from './components/Navigation';
import Grid from "./components/Grid";


import Article from "./components/Article";



function App() {

// der folgende useState Hook wird benutzt, um das query durch die Texteingabe zu updaten
// das query wird in der URL verwendet, mit der die Daten aus der API abgerufen werden
  const [query, setQuery] = useState("")

  // items repräsentiert die response aus der Datenbank. setItems ist die Funktion zum Updaten der Items.
  const [items, setItems] = useState([])
  const [selectedArticle, setSelectedArticle] = useState(null)

  const onItemClick = useCallback((id) => {
    const selected = items.find((item) => item._id === id)
    setSelectedArticle(selected);
  }, [items]);

// wir nutzen einen useEffect Hook, um die component mit der API zu synchronisieren
// axios schickt einen GET request an die search-URL des servers
// der query wird als search parameter angehängt, sodass der server danach sucht
// die Antwort des servers wird momentan nur in der console geloggt; zu Testzwecken zusammen mit dem query, damit man den ggf. prüfen kann
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
      setItems(response.data);
      
       
      }
      catch (error){
        console.log(error);
      }    }
      
      fetchItems()
    }, [query])

    const queryFunction = (q) => {
      setQuery(q)
    }

    console.log(selectedArticle);

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
        {!selectedArticle ? <Grid items={items} onItemClick={onItemClick} /> : null}
        <Article item={selectedArticle} onClose={() => setSelectedArticle(null)}/>
        </section>
        <section className='footer-area'>
        <Footer/>
        </section>
          

      </body>

    </div>
  );
}

export default App;

