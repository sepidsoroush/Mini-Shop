import styles from "@/styles/StarProducts.module.css";
import Post from "./Post";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const StarProducts = (props) => {
  return (
    <div className={`${styles.mainContainer} ${inter.className}`}>
      <h2 className={styles.title}>Products we are proud of</h2>
      <ul className={styles.flexbox}>
        {props.items.map((item) => (
          <li key={item.id}>
            <Post {...item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StarProducts;
