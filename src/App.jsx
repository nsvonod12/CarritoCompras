import { useState, useEffect } from "react"
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import { products } from "./data/dbProducts"

function App() {

  const initialCart = () => {
    const localStorageCart = localStorage.getItem('cart');
    return localStorageCart ? JSON.parse(localStorageCart) : [];
  }
  
  const [data] = useState(products);
  const [cart, setCart] = useState(initialCart);
  const [numItems, setNumItems] = useState(0);

  useEffect(() =>{
    localStorage.setItem('cart', JSON.stringify(cart))
    setNumItems(cart.length);
  },[cart]);

  const MAX_PRODUCTS = 5;
  const MIN_PRODUCTS = 1;

  return (
    <>
      <Header 
        cart={cart}
        setCart={setCart}
        MAX_PRODUCTS={MAX_PRODUCTS}
        MIN_PRODUCTS={MIN_PRODUCTS} 
        numItems={numItems}
      />
      
      <Main 
        data={data}
        cart={cart}
        setCart={setCart}
        MAX_PRODUCTS={MAX_PRODUCTS}
      />

      <Footer />

    </>
  )
}

export default App