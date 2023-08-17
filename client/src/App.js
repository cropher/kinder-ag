import './App.css';
import React, { useState, useEffect, useCallback } from 'react';
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

  const [filter, setFilter] = useState("")


  // items repräsentiert die response aus der Datenbank. setItems ist die Funktion zum Updaten der Items.
  const [items, setItems] = useState([])

  // über den folgenden useState hook wird bestimm, welcher Artikel aktuell ausgewählt ist. Der anfänliche value ist "null", also keiner.
  const [selectedArticle, setSelectedArticle] = useState(null)

  // wenn eine Card angeklickt wird, nimmt die folgende Funktion die id des items und sucht nach dem dazugehörogen Artikel
  // das items prop am Ende der Funktion sorgt dafür, dass der useCallback hook nur ausgeführt wird, wenn sich das items prop ändert.
  const onItemClick = useCallback((id) => {
    const selected = items.find((item) => item._id === id)
    setSelectedArticle(selected);
  }, [items]);

  // wir nutzen einen useEffect Hook, um die component mit der API zu synchronisieren
  // axios schickt einen GET request an die search-URL des servers
  // der query wird als search parameter angehängt, sodass der server danach sucht
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/articles/search`,
          {
            params: {
              search: (query)
            }
          })
        console.log(query);
        console.log(response);
        setItems(response.data);
      }
      catch (error) {
        console.log(error);
      }
    }
    fetchItems()
  }, [query])
  
  const queryFunction = (q) => {
    setQuery(q)
  }


// der folgende hook funktioniert nach dem gleichen Prinzip wie der vorherige.
// Allerdings verwendet dieser den filter aus der Sidebar.
  useEffect(() => {
    const fetchItemsViaFilter = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/articles/filter`,
          {
            params: {
              competence: (filter)
            }
          })
        console.log(filter);
        console.log(response);
        setItems(response.data);
      }
      catch (error) {
        console.log(error);
      }
    }
    fetchItemsViaFilter()
  }, [filter])

  const getFilterFunction = (f) => {
    setFilter(f)
  }


  console.log(selectedArticle);

  console.log("Das sind die Filter, die in der App-Component ankommen: " + filter)

  return (
    <div className='App'>
      <body>
        <section className='navigation'>
          <Navigation />
        </section>
        <section className='search'>
          <SearchBar getQuery={queryFunction} />
        </section>
        <section className='content'>
          <Sidebar getFilterFunction={getFilterFunction}/>
          {/* Die folgende Funktion prüft, ob selectedArticle true oder untrue ist. Wenn es true ist (kein Artikel ausgewählt), wird das Grid angezeigt und die items werden als props an das Grid gegeben. Wenn dagegen ein Artikel ausgewählt wird, wird stattdessen "null" anezeigt, und nicht mehr das Grid.*/}
          {!selectedArticle ? <Grid items={items} onItemClick={onItemClick} /> : null}
          <Article item={selectedArticle} onClose={() => setSelectedArticle(null)} />
        </section>
        <section className='footer-area'>
          <Footer />
        </section>


      </body>

    </div>
  );
}

export default App;

