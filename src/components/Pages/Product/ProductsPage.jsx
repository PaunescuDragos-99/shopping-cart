import { useEffect, useState } from "react";
import Product from "./Product";
import "./ProductsPage.css";

function Products({ products, setCart, cart }) {
  return (
    <>
      <div className="product-container">
        {products &&
          products?.map((product, index) => (
            <div key={index}>
              <Product product={product} setCart={setCart} cart={cart} />
            </div>
          ))}
      </div>
    </>
  );
}

export default Products;
