import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Components/About/About';
import Cart from './Components/Cart/Cart';
import { CartContext, CartContextProvider } from './Components/Contexts/CartContext';


function App() {
  return (
    <CartContextProvider>
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route index path="/" element={<ItemListContainer />} />
          <Route path="/categorias" element={<ItemListContainer />} />
          <Route path="/categorias/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} /> 
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />  
        </Routes>
      </BrowserRouter>
    </div>
    </CartContextProvider>
  );
}

export default App;
