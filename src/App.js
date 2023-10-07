import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemList from './components/ItemList/ItemList';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/' element={<ItemList/>}/>
    <Route path='/item/:id' element={<ItemDetailContainer/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
