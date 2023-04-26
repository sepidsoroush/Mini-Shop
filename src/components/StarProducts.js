// import styles from '@/styles/Hero.module.css'
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
        <div className={styles.grid}>
            {filteredItems.map((item) => {
              const {id , img,description , price} = item;
              return(
                <div key={id} className={styles.product}>
                <Link
                  onClick={() => window.top(0, 0)}
                  href='/'
                >
                  <div className={styles.header}>
                    <Image src={img} alt={description} className={styles.image}/>
                  </div>
                  <div >
                    <p className={styles.details}>{description}</p>
                    <p className={styles.price}>{price}$</p>
                  </div>
                </Link>
              </div>
              )
            })}
          </div>
      </div>
    </div>
  );
}

export default StarProducts;