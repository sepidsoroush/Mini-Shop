import styles from "@/styles/Trending.module.css";
import Post from "./Post";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Trending = (props) => {
  const slideLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 235;
  };

  const slideRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 235;
  };

  return (
    <div className={`${styles.trending} ${inter.className}`}>
      <div className={styles.scrollbar}>
        <h3>Trending Now</h3>
        <div className={styles.btns}>
          <button onClick={slideLeft}>
            <FaArrowLeft />
          </button>
          <button onClick={slideRight}>
            <FaArrowRight />
          </button>
        </div>
      </div>
      <ul className={styles.rowContainer} id="slider">
        {props.items.map((item) => (
          <li key={item.id}>
            <Post {...item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Trending;
