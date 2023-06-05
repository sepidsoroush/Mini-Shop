import { useRouter } from "next/router";
import styles from "@/styles/CategoriesPage.module.css";
import { Inter } from "next/font/google";
import Categories from "@/components/Products/Categories";
import Post from "@/components/Products/Post";

const inter = Inter({ subsets: ["latin"] });

const Product = (props) => {
  const router = useRouter();
  const { slug } = router.query;
  const filteredItems = props.products.filter((item) =>
    slug === "all" ? item : item.category === slug
  );
  return (
    <div className={`${styles.mainContainer} ${inter.className}`}>
      <Categories />
      <ul className={styles.grid}>
        {filteredItems.map((item) => (
          <li key={item.id}>
            <Post {...item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Product;

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
    params: { slug: post.id },
  }));

  return {
    paths: [...paths, { params: { slug: "all" } }],
    fallback: "blocking",
  };
}

export async function getStaticProps() {
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

  return {
    props: {
      products: loadedData,
    },
  };
}
