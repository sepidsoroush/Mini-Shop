import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";
import StarProducts from "@/components/StarProducts";
import Trending from "@/components/Trending";
import Banner1 from '../img/banner/banner1.jpg'
import Banner2 from '../img/banner/banner2.jpg'
import { AppContext } from "@/context/AppContext";
import { useState } from "react";

const HomePage = ()=> {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);

  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  };

  const decQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1;

      return prevQty - 1;
    });
  };

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  const onAdd = (product, quantity) => {
    const checkProductInCart = cartItems.find(
      (item) => item.id === product.id
    );

    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice + Number(product.price) * quantity
    );
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);

    if (checkProductInCart) {
      let updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct.id === product.id)
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity,
          };
      });

      setCartItems(updatedCartItems);
    } else {
      product.quantity = quantity;
      setCartItems([...cartItems, { ...product }]);
    }
  };

  const updateCartItemQty = (index, qtyFactor, cartItem) => {
    let cartItemsArrToBeUpdated = cartItems;
    if (qtyFactor === "inc") {
      cartItemsArrToBeUpdated[index].quantity = cartItem.quantity + 1;
      setTotalPrice((prevTotalPrice) => prevTotalPrice + cartItem.price);
      setTotalQuantities((prevTotalQty) => prevTotalQty + 1);
    } else if (qtyFactor === "dec") {
      if (cartItem.quantity <= 1) return;
      cartItemsArrToBeUpdated[index].quantity = cartItem.quantity - 1;
      setTotalPrice((prevTotalPrice) => prevTotalPrice - cartItem.price);
      setTotalQuantities((prevTotalQty) => prevTotalQty - 1);
    }
    cartItemsArrToBeUpdated[index].totalPrice =
      cartItem.quantity * cartItem.price;

    setCartItems([...cartItemsArrToBeUpdated]);
  };

  const handleCartItemRemove = (index, cartItem) => {
    let cartItemsArrToBeUpdated = cartItems;
    setTotalQuantities((prevTotalQty) => prevTotalQty - cartItem.quantity);
    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice - cartItem.price * cartItem.quantity
    );

    cartItemsArrToBeUpdated.splice(index, 1);
    setCartItems([...cartItemsArrToBeUpdated]);
  };
    return (
      <AppContext.Provider 
      value={{
        showCart,
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        incQty,
        decQty,
        onAdd,
        toggleCart,
        updateCartItemQty,
        setCartItems,
        handleCartItemRemove,
      }}
      >
        <Navbar />
        <Hero />
        <StarProducts />
        <Banner
            type='normal'
            title="Creative harmonious living"
            text=" RAOUF Products are all made to standard sizes so that you can mix and match them freely."
            img={Banner1}
         />
         <Trending />
         <Banner
            type='reverse'
            title="Comfortable & Elegante Living"
            text=" RAOUF Products are all made to standard sizes so that you can mix and match them freely."
            img={Banner2}
         />
         <Newsletter />
         <Footer />
      </AppContext.Provider>
    );
  }
  
  export default HomePage;