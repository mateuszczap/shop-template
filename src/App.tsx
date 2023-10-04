
import './App.css';
import HomePage from './pages/HomePage';
import { ProductPage } from './pages/ProductPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProductDescribe } from './components/ProductDescribe';
import { useParams } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/product-page" element={<ProductPage/>}/>
        <Route path="/product-page/:productName" element={<ProductDescribe/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
