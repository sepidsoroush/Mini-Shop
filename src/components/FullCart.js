import Link from "next/link";
import { useContext } from "react";
import { AppContext } from "@/context/cart-context";
import EmptyCart from "./EmptyCart";
import CartItem from "./CartItem";
import styles from "@/styles/Cart.module.css";

const FullCart = () => {
  const { toggleCart, cartItems, setCartItems, totalPrice } =
    useContext(AppContext);

  return (
    <>
      <div className={styles.main}>
        <div className={styles.fullCart}>
          {cartItems.map((item, id) =>
            cartItems.length !== 0 ? (
              <CartItem key={id} item={item} setCartItem={setCartItems} />
            ) : (
              <EmptyCart key={id} openCart={toggleCart} />
            )
          )}
        </div>
      </div>
      <div className={styles.subtotal}>
        <div className={styles.right}>
          <p>Subtotal</p>
          <p>{totalPrice + ".00$"}</p>
        </div>
        <div className={styles.left}>
          <Link href="#">Go to Checkout</Link>
        </div>
      </div>
    </>
  );
};

export default FullCart;
