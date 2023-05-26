import { useContext } from "react";
import { AppContext } from "@/context/cart-context";
import styles from "@/styles/CartItem.module.css";
import { FaTimes } from "react-icons/fa";

const CartItem = () => {
  const { qty, cartItems, updateCartItemQty, handleCartItemRemove } =
    useContext(AppContext);

  const calcPrice = (quantity, price) => {
    return quantity * price;
  };

  return (
    <>
      {cartItems.map((item, id) => (
        <div key={id} className={styles.item}>
          <div className={styles.image}>
            <img src={item.img} alt="product" />
          </div>
          <div className={styles.middle}>
            <p className={styles.name}>{item.description}</p>
            <div className={styles.btns}>
              <button
                onClick={() => {
                  updateCartItemQty(id, "dec", item);
                }}
              >
                -
              </button>
              <p className={styles.quantity}>{qty}</p>
              <button
                onClick={() => {
                  updateCartItemQty(id, "inc", item);
                }}
              >
                +
              </button>
            </div>
          </div>
          <div className={styles.right}>
            <p className={styles.price}>{calcPrice(qty, item.price)}.00$</p>
            <FaTimes onClick={() => handleCartItemRemove(id, item)} />
          </div>
        </div>
      ))}
    </>
  );
};

export default CartItem;
