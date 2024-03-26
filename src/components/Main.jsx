import Card from "./Card";


const Main = ({data, cart, setCart, MAX_PRODUCTS}) => {

  const addToCart = (product) => {

    const isProductExist = cart.findIndex(cartProduct => cartProduct.id === product.id);
    
    if(isProductExist >= 0){
      if(cart[isProductExist].quantity >= MAX_PRODUCTS) return
      const updateCart = [...cart]
      updateCart[isProductExist].quantity++;
      setCart(updateCart)
    }else {
      product.quantity = 1;
      setCart([...cart, product])
    }
  }

  return (
    <main className="container mx-auto mb-20">
        <div className="my-14">
            <h1 className="text-5xl text-center pt-3 pb-3">Our Products</h1>
            <hr className="border border-spacing-3 h-1 w-52 bg-indigo-900 mx-auto shadow-md shadow-indigo-400/90"/>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 mb-5 gap-5">
            {data.map(item => (
              <Card 
                key={item.id}
                item={item}
                addToCart={addToCart}             
              />
            ))}
    
        </div>
    </main>
  );
};

export default Main;
