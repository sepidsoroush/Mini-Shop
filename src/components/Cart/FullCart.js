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
          {items.map((item, id) =>
            items.length !== 0 ? (
              <CartItem key={id} item={item} />
            ) : (
              <EmptyCart key={id} onClose={props.onClose} />
            )
          )}
        </div>
      </div>
      <div className={styles.subtotal}>
        <div className={styles.right}>
          <p>Subtotal</p>
          <p>{totalAmount + ".00$"}</p>
        </div>
        <div className={styles.left}>
          <Link href="#">Go to Checkout</Link>
        </div>
      </div>
    </>
  );
};

export default FullCart;
