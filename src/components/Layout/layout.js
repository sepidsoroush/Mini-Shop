import Navbar from "./Navbar";
import Footer from "./Footer";
import Newsletter from "./Newsletter";
import Cart from "../Cart/Cart";
import { useState } from "react";

export default function Layout({ children }) {
  const [showCart, setShowCart] = useState(false);

  const openCartHandler = () => {
    setShowCart(true);
    document.body.style.overflow = "hidden";
  };
  const closeCartHandler = () => {
    setShowCart(false);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <Cart onCloseCart={closeCartHandler} show={showCart} />
      <Navbar onOpenCart={openCartHandler} />
      <main>{children}</main>
      <Newsletter />
      <Footer />
    </>
  );
}
