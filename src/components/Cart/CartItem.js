import { useContext } from "react";
import CartContext from "@/context/cart-context";
import styles from "@/styles/CartItem.module.css";
import { FaTimes } from "react-icons/fa";

const CartItem = () => {
  const { items, removeItem, addItem, deleteItem } = useContext(CartContext);

  const removeItemHandler = () => {
    removeItem();
  };
  const addItemHandler = () => {
    addItem();
  };
  const deleteItemHandler = (id) => {
    deleteItem(id);
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
              <p>{items.amount}</p>
              <button onClick={addItemHandler}>+</button>
            </div>
          </div>
          <div className={styles.info}>
            <p className={styles.price}>
              {calcPrice(item.amount, item.price)}.00$
            </p>
            <FaTimes onClick={deleteItemHandler} />
          </div>
        </div>
      ))}
    </>
  );
};

export default CartItem;
