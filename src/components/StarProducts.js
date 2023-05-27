import { items } from "./AllData";
import styles from "@/styles/StarProducts.module.css";
import Post from "../components/Products/Post";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const StarProducts = () => {
  const filteredItems = items.filter((item) => item.star);
  return (
    <div className={`${styles.mainContainer} ${inter.className}`}>
      <h2 className={styles.title}>Products we are proud of</h2>
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

export default StarProducts;
