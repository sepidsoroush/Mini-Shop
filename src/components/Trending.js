import styles from '@/styles/Trending.module.css'
import { items } from "./AllData";
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowLeft ,FaArrowRight } from "react-icons/fa";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const Trending = () => {
const filteredItems = items.filter((item) => item.trend);  
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
      <div className={styles.container}>
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
        <div className={styles.rowContainer} id="slider">
            {filteredItems.map((item) => (
            <div key={item.id} className={styles.item}>
            <Link
                onClick={() => window.top(0, 0)}
                href={`/product/${item.id}`}
            >
                <div className={styles.header}>
                <Image src={item.img} alt="product" priority />
                </div>
                <div >
                <p className={styles.description}>{item.description}</p>
                <p className={styles.price}>{item.price}$</p>
                </div>
            </Link>
            </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Trending;