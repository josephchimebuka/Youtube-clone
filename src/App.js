import './App.css';
import Home from "./components/Home/Home"
import { BrowserRouter,Routes,Route, } from 'react-router-dom'
import SearchPage from './components/SearchPage/SearchPage';


function App() {
  return (
    <div className="App">
  
      <BrowserRouter>
      <Routes>
       <Route path='/' element={<Home/>} />
       <Route path='/services' element={<SearchPage/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
