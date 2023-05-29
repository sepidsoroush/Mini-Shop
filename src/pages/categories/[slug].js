import { useRouter } from "next/router";
import { items } from "../../components/AllData";
import styles from "@/styles/CategoriesPage.module.css";
import { Inter } from "next/font/google";
import Categories from "@/components/Products/Categories";
import Post from "@/components/Products/Post";

const inter = Inter({ subsets: ["latin"] });

const Product = () => {
  const router = useRouter();
  const { slug } = router.query;
  const filteredItems = items.filter((item) =>
    slug === "all" ? item : item.category === slug
  );
  return (
    <div className={`${styles.mainContainer} ${inter.className}`}>
      <Categories />
      <ul className={styles.flexbox}>
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
