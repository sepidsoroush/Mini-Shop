import Navbar from "./Navbar";
import Footer from "./Footer";
import Newsletter from "./Newsletter";

import { useState } from "react";

export default function Layout({ children }) {
  const [showCart, setShowCart] = useState(false);

  const openCartHandler = () => {
    setShowCart(true);
  };
  const closeCartHandler = () => {
    setShowCart(false);
  };
  return (
    <>
      {showCart && <Cart onCloseCart={closeCartHandler} show={showCart} />}
      <Navbar onOpenCart={openCartHandler} />
      <main>{children}</main>
      <Newsletter />

      <Footer />
    </>
  );
}
