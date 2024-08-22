import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Products from "./pages/product/Products";
import Cart from "./pages/cart/Cart";
import { CartContextProvider } from './context/CartContext';
import  Favorite  from './pages/favorite/Favorite';
import  ProductDetail  from './pages/product/ProductDetail'; 
import "./App.css";
import Footer from "./components/Footer";
import SearchResults from "./pages/product/SearchResults";


function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path='/product/:id' element={<ProductDetail/>} />
            <Route path="/cart" element={<Cart />} />
            <Route path='/favorite' element={<Favorite/>} />
            <Route path="/search" element={<SearchResults/>}/>
          </Routes>
          <Footer/>
        </Router>
      </CartContextProvider>
    </div>
  );
}

export default App;
