import { useContext, useState, useEffect } from "react";
import styles from "../../styles/CartButton.module.css";
import { FaShoppingCart } from "react-icons/fa";
import CartContext from "../../context/cart-context";

const CartButton = (props) => {
  const [btnHighlighted, setBtnHighlighted] = useState(false);
  const { items } = useContext(CartContext);
  const totalOrders = items.reduce((currentNum, item) => {
    return currentNum + item.amount;
  }, 0);
  const btnClasses = `${styles.button} ${btnHighlighted ? styles.bump : ""}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnHighlighted(true);
    const timer = setTimeout(() => {
      setBtnHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span
        data-array-length={totalOrders}
        className={`${styles.icon} ${totalOrders > 0 ? styles.items : ""}`}
      >
        <FaShoppingCart />
      </span>
    </button>
  );
};

export default CartButton;
