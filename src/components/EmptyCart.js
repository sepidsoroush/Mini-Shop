import EmptyCartImg from "../img/cart/empty-cart.png";
import styles from '@/styles/Cart.module.css'
import Image from 'next/image'

const EmptyCart =({openCart})=> {
  return (
    <div className={styles.empty}>
      <Image src={EmptyCartImg} alt="empty-cart" priority />
      <p>Your cart is empty</p>
      <button onClick={openCart}>Keep Browsing</button>
    </div>
  );
}

export default EmptyCart;