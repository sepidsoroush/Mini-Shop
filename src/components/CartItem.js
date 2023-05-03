import { useContext, useEffect, useState } from "react";
import { AppContext } from '@/context/AppContext'
import styles from '@/styles/CartItem.module.css'
import { FaTimes } from "react-icons/fa";

const CartItem = ()=> {
  const [quantity, setQuantity] = useState(1);
  const {
    qty,
    incQty,
    decQty,
    onAdd,
    toggleCart,
    cartItems,
    setCartItems,
    totalPrice,
    updateCartItemQty,
    handleCartItemRemove,
  } = useContext(AppContext);

  const calcPrice = (quantity, price) => {
    return quantity * price;
  };

  const [deleteItem, setDeleteItem] = useState(cartItems);

  const removeFromCart = (id) => {
    const updateCart = cartItems.filter((item) => item.id !== id);
    setDeleteItem(updateCart);
    const json = JSON.stringify(cartItem.id);
    localStorage.removeItem("cartItem", json);
  };

  useEffect(() => {
    setCartItems(deleteItem);
  }, [deleteItem, setCartItems]);

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
              <button onClick={decQty}>-</button>
              <p className={styles.quantity}>{qty}</p>
              <button onClick={incQty}>+</button>
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