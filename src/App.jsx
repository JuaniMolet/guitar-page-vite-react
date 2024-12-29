import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Guitar from "./components/Guitar";
import Header from "./components/Header";
import guitars from "./data/db";

const App = () => {

  const initialCart = JSON.parse(localStorage.getItem("cart")) || [];

  const [data, setData] = useState(guitars);
  const [cart, setCart] = useState(initialCart);

  useEffect(() => {
    setData(guitars);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    const itemExist = cart.findIndex((guitar) => guitar.id === item.id);
    if (itemExist !== -1) {
      const updatedCart = [...cart];
      updatedCart[itemExist].quantity++;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  const removeAllFromCart = () => {
    setCart([]);
  };

  const increaseQuantity = (id) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        item.quantity++;
      }
      return item;
    });
    setCart(updatedCart);
  };

  const decreaseQuantity = (id) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id && item.quantity > 1) {
        item.quantity--;
      }
      return item;
    });
    setCart(updatedCart);
  };

  return (
    <body>
      <Header
        cart={cart}
        removeFromCart={removeFromCart}
        removeAllFromCart={removeAllFromCart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
      />
      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {data.map((guitar) => (
            <Guitar
              key={guitar.id}
              guitar={guitar}
              cart={cart}
              addToCart={() => addToCart(guitar)}
            />
          ))}
        </div>
      </main>

      <Footer />
    </body>
  );
};

export default App;
