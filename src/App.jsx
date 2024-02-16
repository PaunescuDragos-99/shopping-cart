import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import "./App.css";
import HomePage from "./components/Pages/HomePage";
import Products from "./components/Pages/Product/ProductsPage";
import ShoppingCart from "./components/Pages/ShoppingCart";
import ErrorPage from "./components/Pages/ErrorPage";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState(null);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} errorElement={<ErrorPage />} />
          <Route
            path="/products"
            element={
              <Products products={products} setCart={setCart} cart={cart} />
            }
            errorElement={<ErrorPage />}
          />
          <Route
            path="/shoppingcart"
            element={
              <ShoppingCart cart={cart} products={products} setCart={setCart} />
            }
            errorElement={<ErrorPage />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
