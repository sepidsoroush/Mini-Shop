import { useContext } from "react";
import CartContext from "@/context/cart-context";
import styles from "@/styles/CartItem.module.css";
// import { FaTimes } from "react-icons/fa";

const CartItem = () => {
  const { items, removeItem, addItem } = useContext(CartContext);

  const removeItemHandler = () => {
    removeItem();
  };
  const addItemHandler = () => {
    addItem();
  };

  const calcPrice = (quantity, price) => {
    return quantity * price;
  };

  return (
    <>
      {items.map((item, id) => (
        <div key={id} className={styles.item}>
          <div className={styles.image}>
            <img src={item.img} alt="product" />
          </div>
          <div className={styles.middle}>
            <p className={styles.name}>{item.description}</p>
            <div className={styles.btns}>
              <button onClick={removeItemHandler}>-</button>
              <p className={styles.quantity}>{items.amount}</p>
              <button onClick={addItemHandler}>+</button>
            </div>
          </div>
          <div className={styles.right}>
            <p className={styles.price}>
              {calcPrice(item.amount, item.price)}.00$
            </p>
            {/* <FaTimes onClick={() => handleCartItemRemove(id, item)} /> */}
          </div>
        </div>
      ))}
    </>
  );
};

export default CartItem;
