import "./Product.css";

function Product({ product, setCart, cart }) {
  const handleClick = (product) => {
    const existingItemIndex = cart.findIndex((item) => item.id === product.id);
    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].count += 1;
      updatedCart[existingItemIndex].price *= 2;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, count: 1 }]);
    }
  };
  return (
    <div className="card">
      <span className="title">{product.title}</span>
      <img
        src={product.image}
        alt="product-image"
        height="200px"
        width="200px"
      />
      <span className="price">{product.price}</span>
      <span className="description">{product.description}</span>
      <button onClick={() => handleClick(product)}>Add to cart!</button>
    </div>
  );
}

export default Product;
