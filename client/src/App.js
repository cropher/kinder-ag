import './App.css';
import React from 'react';
import SearchBar from './components/SearchBar';
import Sidebar from "./components/Sidebar";
import React from 'react';
// import Article from "./components/Article";
  import Footer from './components/Footer;


function App() {
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
      <Footer/>
      </body>
    </div>
  );
}

export default App;

