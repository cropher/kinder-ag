import './App.css';
import React from 'react';
import SearchBar from './components/SearchBar';
import Sidebar from "./components/Sidebar";
// import Article from "./components/Article";
import Footer from "./components/footer.jsx";


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
        <section className='footer-area'>
        <Footer/>
        </section>
          

      </body>

    </div>
  );
}

export default App;

