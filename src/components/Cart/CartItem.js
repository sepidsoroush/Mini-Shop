import { useContext, useState } from "react";
import CartContext from "@/context/cart-context";
import styles from "@/styles/CartItem.module.css";
import { FaTimes } from "react-icons/fa";
import Image from "next/image";
import useHttp from "@/hooks/use-http";
import { useEffect } from "react";

const CartItem = (props) => {
  const { id, name, amount, price } = props.item;
  const [image, setImages] = useState();
  const { removeItem, addItem, deleteItem } = useContext(CartContext);
  const { isLoading, error, sendRequest: fetchProducts } = useHttp();
  const defaultPic =
    "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

  useEffect(() => {
    const transformData = (dataObj) => {
      const loadedData = [];
      for (const key in dataObj) {
        loadedData.push({
          id: key,
          img: dataObj[key].img,
        });
      }
      const selectedItem = loadedData.filter((img) => img.id === id);
      setImages(selectedItem[0].img);
    };

    fetchProducts(
      {
        url: "https://e-commerce-bed4b-default-rtdb.firebaseio.com/products.json",
      },
      transformData
    );
  }, []);

  const removeItemHandler = () => {
    removeItem(id);
  };
  const addItemHandler = () => {
    addItem({ ...props.item, amount: 1 });
  };
  const deleteItemHandler = () => {
    deleteItem(id);
  };

  return (
    <div className={styles.item}>
      <div className={styles.image}>
        {isLoading ? (
          <Image src={defaultPic} alt={name} width={128} height={148} />
        ) : (
          <Image src={image} alt={name} width={128} height={148} />
        )}
        {error && (
          <Image src={defaultPic} alt={name} width={128} height={148} />
        )}
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
        <p>{amount * price}.00$</p>
        <FaTimes onClick={deleteItemHandler} className={styles.icon} />
      </div>
    </div>
  );
};

export default CartItem;
