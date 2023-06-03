import styles from "@/styles/Cart.module.css";
import { useContext } from "react";
import FullCart from "./FullCart";
import EmptyCart from "./EmptyCart";
import { FaTimes } from "react-icons/fa";
import { Inter } from "next/font/google";
import CartContext from "@/context/cart-context";

const inter = Inter({ subsets: ["latin"] });

const Cart = (props) => {
  const { items } = useContext(CartContext);
  const closeCartHandler = () => {
    props.onCloseCart();
  };

  return (
    <>
      {/* overlay */}
      <div
        onClick={closeCartHandler}
        className={`${styles.overlay} ${
          props.show ? styles.openOverlay : styles.closedOverlay
        }`}
      ></div>
      {/* cart */}
      <div
        className={`${styles.cart} ${inter.className} ${
          props.show ? styles.opencart : styles.closedcart
        }`}
      >
        <div className={styles.header}>
          <h2 className={styles.title}>Your Shopping Cart ({items.length})</h2>
          <FaTimes onClick={closeCartHandler} className={styles.icon}></FaTimes>
        </div>

        <div className={styles.body}>
          {items.length < 1 ? (
            <EmptyCart onClose={closeCartHandler} />
          ) : (
            <FullCart onClose={closeCartHandler} />
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
