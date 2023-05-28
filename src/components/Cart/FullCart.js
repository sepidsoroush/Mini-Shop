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
      <div className={styles.main}>
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
      <div className={styles.subtotal}>
        <div className={styles.price}>
          <p>Subtotal</p>
          <p>{totalAmount + ".00$"}</p>
        </div>
        <div className={styles.action}>
          <Link href="#">Go to Checkout</Link>
        </div>
      </div>
    </>
  );
};

export default FullCart;
