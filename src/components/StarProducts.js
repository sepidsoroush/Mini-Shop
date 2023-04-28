import { items } from "./AllData";
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/StarProducts.module.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const StarProducts = () =>{
  const filteredItems = items.filter((item) => item.star);
  return (
    <div className={`${styles.mainContainer} ${inter.className}`}>
      <h2 className={styles.title}>Products we are proud of</h2>
      <div className={styles.container}>
        <div className={styles.flexbox}>
            {filteredItems.map((item) => {
              const {id , img,description , price} = item;
              return(
                  <Link
                    key={id}
                    className={styles.product}
                    onClick={() => window.top(0, 0)}
                    href={`/product/${id}`}
                  >
                    <Image src={img} alt={description} className={styles.image} priority />
                    <p className={styles.details}>{description}</p>
                    <p className={styles.price}>{price}$</p>
                  </Link>
              )
            })}
          </div>
      </div>
    </div>
  );
}

export default StarProducts;