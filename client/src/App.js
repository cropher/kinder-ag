import './App.css';
import SearchBar from './components/SearchBar';
import Sidebar from "./components/Sidebar";
import React from 'react';
// import Body from './components/body';
// import Footer from './components/footer';

function App() {
  return (
    <div className='App'>
      <body>
      <SearchBar/>
      <Sidebar/>
      {/* <Footer/> */}
      </body>
    </div>
  );
}

export default App;

