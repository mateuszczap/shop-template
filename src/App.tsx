
import './App.css';
import HomePage from './pages/HomePage';
import { ProductPage } from './pages/ProductPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProductDescribe } from './components/ProductDescribe';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/product-page" element={<ProductPage/>}/>
        <Route path="/product-page/:product" element={<ProductDescribe/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
