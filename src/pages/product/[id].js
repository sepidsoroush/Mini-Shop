import { items as allData } from "../../components/AllData";
import ProductForm from "@/components/Products/ProductForm";
import { useRouter } from "next/router";
import { useState, useContext, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/ProductPage.module.css";
import { FaAngleLeft } from "react-icons/fa";
import CartContext from "@/context/cart-context";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const ProductPage = () => {
  const { items, addItem } = useContext(CartContext);
  const router = useRouter();
  const [item, setItem] = useState({});
  const [image, setImage] = useState(item.img);
  // const [notify, setNotify] = useState(false);

  const changeImage = (e) => {
    setImage(e.target.src);
  };

  const amountHandler = (enteredAmount) => {
    addItem({
      id: item.id,
      name: item.name,
      amount: enteredAmount,
      price: item.price,
    });
  };

  // const showNotify = () => {
  //   setNotify(!notify);
  // };

  useEffect(() => {
    if (router.query.id) {
      const filteredItem = allData.filter(
        (item) => item.id === parseInt(router.query.id)
      );
      setItem(filteredItem[0]);
    }
  }, [router.query.id]);

  return (
    <>
      {/* <div
        onAnimationEnd={() => setNotify(false)}
        className={`${styles.notify} ${notify ? styles.slidein : ""}`}
      >
        <p>Item has been added to the cart &nbsp; ✅</p>
      </div> */}
      <div className={`${styles.main} ${inter.className}`}>
        <div className={styles.product}>
          <h3 className={styles.title}>{item.description}</h3>
          <div className={styles.left}>
            <div className={styles.bigImg}>
              {image && (
                <Image
                  src={image}
                  alt="product"
                  width={435}
                  height={435}
                  priority
                />
              )}
            </div>
            <div className={styles.small}>
              <div className={styles.img}>
                {item.img && (
                  <Image
                    onMouseOver={changeImage}
                    width={435}
                    height={435}
                    src={item.img}
                    alt="product"
                    priority
                  />
                )}
              </div>
              <div className={styles.img}>
                {item.otherImgs && item.otherImgs[0] && (
                  <Image
                    onMouseOver={changeImage}
                    width={435}
                    height={435}
                    src={item.otherImgs[0]}
                    alt="product"
                    priority
                  />
                )}
              </div>
              <div className={styles.img}>
                {item.otherImgs && item.otherImgs[1] && (
                  <Image
                    onMouseOver={changeImage}
                    width={500}
                    height={500}
                    src={item.otherImgs[1]}
                    alt="product"
                    priority
                  />
                )}
              </div>
            </div>
          </div>
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
        {/* <Link
          href="/"
          className={styles.back}
          onClick={() => window.scrollTo(0, 0)}
        >
          <FaAngleLeft />
          <span>Back</span>
        </Link> */}
      </div>
    </>
  );
};
export default ProductPage;
