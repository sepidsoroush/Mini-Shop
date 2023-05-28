import { useContext } from "react";
import CartContext from "@/context/cart-context";
import styles from "@/styles/CartItem.module.css";
import { FaTimes } from "react-icons/fa";
import { items as allData } from "../AllData";
import Image from "next/image";

const CartItem = (props) => {
  const { id, name, amount, price } = props.item;
  const image = allData[id].img;
  const { removeItem, addItem, deleteItem } = useContext(CartContext);

  const removeItemHandler = () => {
    removeItem();
  };
  const addItemHandler = () => {
    addItem();
  };
  const deleteItemHandler = (id) => {
    deleteItem(id);
  };

  return (
    <div className={styles.item}>
      <div className={styles.image}>
        <Image src={image} alt="product" />
      </div>
      <div className={styles.middle}>
        <p className={styles.name}>{name}</p>
        <div className={styles.btns}>
          <button onClick={removeItemHandler}>-</button>
          <p>{amount}</p>
          <button onClick={addItemHandler}>+</button>
        </div>
      </div>
      <div className={styles.info}>
        <p className={styles.price}>{amount * price}.00$</p>
        <FaTimes onClick={deleteItemHandler} />
      </div>
    </div>
  );
};

export default CartItem;
