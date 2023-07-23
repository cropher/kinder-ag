import './App.css';
import SearchBar from './components/SearchBar';
import Sidebar from "./components/Sidebar";
import React from 'react';
import Body from './components/body';
// import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <SearchBar/>
      <Sidebar/>
      <Body/>
      {/* <Footer/> */}
    </div>
  );
}

export default App;

