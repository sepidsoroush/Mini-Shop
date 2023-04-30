import Link from 'next/link'
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../pages/Product/[id]";
import EmptyCart from "./EmptyCart";
import CartItem from "./CartItem";
import styles from '@/styles/Cart.module.css'

const FullCart =()=> {
  const { cartItem, setCartItem } = useContext(CartContext);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const newTotalPrice = cartItem.reduce((acc, item) => acc + item.price, 0);
    setTotalPrice(newTotalPrice);
  }, [cartItem]);

  return (
    <>
      <div className={styles.main}>
        <div className={styles.fullCart}>
          {cartItem.map((item, id) =>
            cartItem.length !== 0 ? (
              <CartItem key={id} item={item} setCartItem={setCartItem} />
            ) : (
              <EmptyCart key={id} />
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
          <Link>Go to Checkout</Link>
        </div>
      </div>
    </>
  );
}

export default FullCart;