import { useContext, useEffect, useState } from "react";
import { CartContext } from "../pages/product/[id]";
import styles from '@/styles/CartItem.module.css'
import { FaTimes } from "react-icons/fa";

const CartItem = ()=> {
  const [quantity, setQuantity] = useState(1);
  const { cartItem, setCartItem } = useContext(CartContext);

  const increase = () => {
    if (quantity >= 1) {
      setQuantity(quantity + 1);
    }
  };

  const decrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const calcPrice = (quantity, price) => {
    return quantity * price;
  };

  const [deleteItem, setDeleteItem] = useState(cartItem);

  const removeFromCart = (id) => {
    const updateCart = cartItem.filter((item) => item.id !== id);
    setDeleteItem(updateCart);
    const json = JSON.stringify(cartItem.id);
    localStorage.removeItem("cartItem", json);
  };

  useEffect(() => {
    setCartItem(deleteItem);
  }, [deleteItem, setCartItem]);

  return (
    <>
      {cartItem.map((item, id) => (
        <div key={id} className={styles.item}>
          <div className={styles.image}>
            <img src={item.img} alt="product" />
          </div>
          <div className={styles.middle}>
            <p className={styles.name}>{item.description}</p>
            <div className={styles.btns}>
              <button onClick={decrease}>-</button>
              <p className={styles.quantity}>{quantity}</p>
              <button onClick={increase}>+</button>
            </div>
          </div>
          <div className={styles.right}>
            <p className={styles.price}>{calcPrice(quantity, item.price)}.00$</p>
            <FaTimes onClick={() => removeFromCart(item.id)} />
          </div>
        </div>
      ))}
    </>
  );
}

export default CartItem;