import { items as allData } from "../../components/AllData";
import ProductForm from "@/components/Products/ProductForm";
import { useRouter } from "next/router";
import { useState, useContext, useEffect } from "react";
import styles from "@/styles/ProductPage.module.css";
import { FaAngleLeft } from "react-icons/fa";
import CartContext from "@/context/cart-context";
import { Inter } from "next/font/google";
import ProductImgAlbum from "@/components/Products/ProductImgAlbum";
import Trending from "@/components/Trending";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const ProductPage = () => {
  const { addItem } = useContext(CartContext);
  const router = useRouter();
  const [item, setItem] = useState({});
  const [notify, setNotify] = useState(false);

  useEffect(() => {
    if (router.query.id) {
      const filteredItem = allData.filter(
        (item) => item.id === parseInt(router.query.id)
      );
      setItem(filteredItem[0]);
    }
  }, [router.query.id]);

  const amountHandler = (enteredAmount) => {
    addItem({
      id: item.id,
      name: item.name,
      amount: enteredAmount,
      price: item.price,
    });
  };

  const showNotify = () => {
    setNotify(!notify);
  };

  return (
    <>
      {/* <div
        onAnimationEnd={() => setNotify(false)}
        className={`${styles.notify} ${notify ? styles.slidein : ""}`}
      >
        <p>Item has been added to the cart &nbsp; ✅</p>
      </div> */}
      <div className={`${styles.main} ${inter.className}`}>
        <div className={styles.title}>
          <Link href="/" className={styles.back}>
            <FaAngleLeft />
            <span>Back</span>
          </Link>
          <h3>{item.description}</h3>
        </div>
        <div className={styles.product}>
          <ProductImgAlbum mainImg={item.img} otherImgs={item.otherImgs} />
          <ProductForm onAddToCart={amountHandler} {...item} />
        </div>

        <div className={styles.specifications}>
          <div className={styles.spec}>
            <p className={styles.specTitle}>Texture:</p>
            <p className={styles.desc}>{item.texture}</p>
          </div>
          <div className={styles.spec}>
            <p className={styles.specTitle}>Weight:</p>
            <p className={styles.desc}>{item.weight}</p>
          </div>
          <div className={styles.spec}>
            <p className={styles.specTitle}>Size:</p>
            <p className={styles.desc}>{item.size}</p>
          </div>
        </div>

        <Trending />
      </div>
    </>
  );
};
export default ProductPage;
