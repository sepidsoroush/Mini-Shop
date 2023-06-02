import { useContext, useEffect, useState } from "react";
import CartContext from "@/context/cart-context";
import styles from "@/styles/Notification.module.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Notification = (props) => {
  const [btnHighlighted, setBtnHighlighted] = useState(false);
  const { items } = useContext(CartContext);
  const btnClasses = `${inter.className} ${styles.notify} ${
    props.status && btnHighlighted ? styles.slidein : ""
  }`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnHighlighted(true);
    const timer = setTimeout(() => {
      setBtnHighlighted(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <div className={btnClasses}>
      <p>{props.message}</p>
    </div>
  );
};

export default Notification;
