import "./ShoppingCart.css";

function ShoppingCart({ cart, products, setCart }) {
  if (cart.length === 0) {
    return (
      <div className="cart-container">
        <span>The cart is Empty!</span>
      </div>
    );
  }

  const calculateTotal = () => {
    let total = 0;
    cart.map((cartItem, index) => {
      total = total + cartItem.price;
    });
    console.log(total);
    return total;
  };

  function handleIncreaseCount(cartItem) {
    const existingItemIndex = cart.findIndex((item) => item.id === cartItem.id);
    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].count += 1;
      updatedCart[existingItemIndex].price *= 2;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...cartItem, count: 1 }]);
    }
  }

  function handleDecreaseCount(cartItem) {
    const existingItemIndex = cart.findIndex((item) => item.id === cartItem.id);
    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      if (updatedCart[existingItemIndex].count !== 1) {
        updatedCart[existingItemIndex].count -= 1;
        updatedCart[existingItemIndex].price /= 2;
        setCart(updatedCart);
      }
    } else {
      setCart([...cart, { ...cartItem, count: 1 }]);
    }
  }
  function handleRemoveItem(cartItem) {
    const itemIndex = cart.findIndex((item) => item.id === cartItem.id);
    if (itemIndex !== -1) {
      const updatedCart = [
        ...cart.slice(0, itemIndex),
        ...cart.slice(itemIndex + 1),
      ];
      setCart(updatedCart);
    }
  }

  return (
    <>
      <div className="cart-container">
        <span>The cart:</span>
        {cart.map((cartItem, index) => {
          const product = products.find(
            (product) => product.id === cartItem.id
          );
          if (product) {
            return (
              <div className="cart-item" key={index}>
                <img
                  src={product.image}
                  alt="product-image"
                  width={"100px"}
                  height={"100px"}
                />
                <div className="cart-item-details">
                  <p>{product.title}</p>
                  <p className="cart-item-price">Price: {cartItem.price}</p>
                  <p className="cart-item-count">Count: {cartItem.count}</p>
                  <div className="button-count">
                    <button onClick={() => handleIncreaseCount(cartItem)}>
                      +
                    </button>
                    <button onClick={() => handleDecreaseCount(cartItem)}>
                      -
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => handleRemoveItem(cartItem)}
                    >
                      X
                    </button>
                  </div>
                </div>
              </div>
            );
          } else {
            return null;
          }
        })}
        <div className="total">Total price: ${calculateTotal()}</div>
      </div>
    </>
  );
}

export default ShoppingCart;
