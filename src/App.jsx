import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Login from './Pages/Login';
import ProductDetails from './Pages/ProductDetails';
import Product from './Pages/Product';
import CarrinhoPage from './Pages/Carrinho';
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}/>
          <Route path='login' element={<Login />}/>
          <Route path='productDetails' element={<ProductDetails />}/>
          <Route path='product' element={<Product />}/>
          <Route path='carrinho' element={<CarrinhoPage />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}