import AddBooks from './Components/AddBook';
import './App.css';
import ShowBooks from './Components/ShowBooks';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Components/Home';
import SearchBooks from './Components/SearchBooks';
import DeleteBook from './Components/DeleteBook';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element = {<Home/>}/>
          <Route path="/add" element = {<AddBooks/>}/>
          <Route path="/show" element = {<ShowBooks/>}/>
          <Route path="/search" element = {<SearchBooks/>}/>
          <Route path="/delete" element = {<DeleteBook/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
