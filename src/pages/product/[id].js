import { useContext, useState } from "react";
import CartContext from "@/context/cart-context";
import ProductForm from "@/components/Products/ProductForm";
import ProductImgAlbum from "@/components/Products/ProductImgAlbum";
import Trending from "@/components/Products/Trending";
import Notification from "@/components/UI/Notification";
import styles from "@/styles/ProductPage.module.css";
import { FaAngleLeft } from "react-icons/fa";
import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const ProductPage = (props) => {
  const { addItem } = useContext(CartContext);
  const [notify, setNotify] = useState(false);
  const [message, setMessage] = useState("");

  const amountHandler = (amount) => {
    addItem({
      id: props.item.id,
      name: props.item.description,
      amount: amount,
      price: props.item.price,
      img: props.item.img,
    });
    showNotify();
    setMessage("✅ Item has been added to the cart");
  };

  const showNotify = () => {
    setNotify(true);
  };
  const endNotify = () => {
    setNotify(false);
  };

  return (
    <>
      {notify && (
        <Notification
          status={notify}
          message={message}
          onAnimationEnd={endNotify}
        />
      )}
      <div className={`${styles.main} ${inter.className}`}>
        <div className={styles.title}>
          <Link href="/" className={styles.back}>
            <FaAngleLeft />
            <span>Back</span>
          </Link>
          <h3>{props.item.description}</h3>
        </div>
        <div className={styles.product}>
          <ProductImgAlbum
            mainImg={props.item.img}
            otherImgs={props.item.otherImgs}
          />
          <ProductForm onAddToCart={amountHandler} {...props.item} />
        </div>

        <div className={styles.specifications}>
          <div className={styles.spec}>
            <p className={styles.specTitle}>Texture:</p>
            <p className={styles.desc}>{props.item.texture}</p>
          </div>
          <div className={styles.spec}>
            <p className={styles.specTitle}>Weight:</p>
            <p className={styles.desc}>{props.item.weight}</p>
          </div>
          <div className={styles.spec}>
            <p className={styles.specTitle}>Size:</p>
            <p className={styles.desc}>{props.item.size}</p>
          </div>
        </div>

        <Trending items={props.products.filter((item) => item.trend)} />
      </div>
    </>
  );
};
export default ProductPage;

export async function getStaticPaths() {
  const res = await fetch(
    "https://e-commerce-bed4b-default-rtdb.firebaseio.com/products.json"
  );
  const products = await res.json();
  const loadedData = [];

  for (const key in products) {
    loadedData.push({
      id: products[key].id,
    });
  }

  const paths = loadedData.map((post) => ({
    params: { id: post.id },
  }));

  return { paths, fallback: "blocking" };
}

export async function getStaticProps(context) {
  const productId = context.params.id;
  const res = await fetch(
    "https://e-commerce-bed4b-default-rtdb.firebaseio.com/products.json"
  );
  const dataObj = await res.json();

  const loadedData = [];

  for (const key in dataObj) {
    loadedData.push({
      id: key,
      category: dataObj[key].category,
      path: dataObj[key].id,
      img: dataObj[key].img,
      description: dataObj[key].description,
      price: dataObj[key].price,
      otherImgs: dataObj[key].otherImgs,
      specs: dataObj[key].specs,
      texture: dataObj[key].texture,
      weight: dataObj[key].weight,
      size: dataObj[key].size,
      star: dataObj[key].star,
      trend: dataObj[key].trend,
    });
  }

  const selectedItem = loadedData.filter(
    (product) => product.path == productId
  );

  return {
    props: {
      products: loadedData,
      item: selectedItem[0],
    },
  };
}
