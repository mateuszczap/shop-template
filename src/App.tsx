
import './App.css';
import HomePage from './pages/HomePage';
import { ProductPage } from './pages/ProductPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProductDescribe } from './components/ProductDescribe';
import { AboutMe } from './components/AboutMe';
import { Contact } from './components/Contact';
import { Faq } from './components/Faq';
import { ShopBasket } from './components/ShopBasket';
import { useState } from 'react';


function App() {
  const [products, setProducts] = useState([]) 
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/product-page" element={<ProductPage setProducts={setProducts}/>}/>
        <Route path="/product-page/:productName" element={<ProductDescribe/>}/>
        <Route path="/about-me" element={<AboutMe/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/faq" element={<Faq/>}/>
        <Route path="/shop-basket" element={<ShopBasket products={products} setProducts={setProducts}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
