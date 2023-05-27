import { useState } from "react";
import styles from "@/styles/ProductForm.module.css";

const ProductForm = (props) => {
  const [enteredAmount, setEnteredAmount] = useState(0);

  const increaseHandler = () => {
    setEnteredAmount((prevState) => prevState + 1);
  };
  const decreaseHandler = () => {
    if (enteredAmount > 0) {
      setEnteredAmount((prevState) => prevState - 1);
    }
  };
  const addToCartHandler = () => {
    props.onAddToCart(enteredAmount);
  };

  return (
    <div className={styles.form}>
      <p className={styles.story}>{props.specs}</p>
      <div className={styles.quant}>
        <p>Quantity</p>
        <div className={styles.btns}>
          <button onClick={decreaseHandler}>-</button>
          <p className={styles.quantity}>{enteredAmount}</p>
          <button onClick={increaseHandler}>+</button>
        </div>
        <p className={styles.price}>{props.price}.00$</p>
      </div>
      <div className={styles.addCart}>
        <button onClick={addToCartHandler} className={styles.addBtn}>
          add to cart
        </button>
        <button className={styles.buyBtn}>buy now</button>
      </div>
    </div>
  );
};
export default ProductForm;
