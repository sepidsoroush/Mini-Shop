import Link from "next/link";
import { useContext } from "react";
import CartContext from "@/context/cart-context";
import EmptyCart from "./EmptyCart";
import CartItem from "./CartItem";
import styles from "@/styles/Cart.module.css";

const FullCart = (props) => {
  const { items, totalAmount } = useContext(CartContext);

  return (
    <>
      <div className={styles.body}>
        <div className={styles.fullCart}>
          {items.length === 0 ? (
            <EmptyCart onClose={props.onClose} />
          ) : (
            <ul>
              {items.map((item) => (
                <li key={item.id}>
                  <CartItem item={item} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.title}>Subtotal</div>
        <div className={styles.container}>
          <span className={styles.price}>{totalAmount + ".00$"}</span>
          <button className={styles.action}>Go to Checkout</button>
        </div>
      </div>
    </>
  );
};

export default FullCart;
