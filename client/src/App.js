import './App.css';
import SearchBar from './components/SearchBar';
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="container">
      <SearchBar/>
      <Sidebar/>
    </div>
  );
}

export default App;
