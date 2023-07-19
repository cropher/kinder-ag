import './App.css';
import SearchBar from './components/SearchBar';
import Sidebar from "./components/Sidebar";
import React from 'react';
import Body from './components/body.js';
import Footer from './components/footer.jsx';

function App() {
  return (
    <div className='App'>
      <SearchBar/>
      <Sidebar/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;

