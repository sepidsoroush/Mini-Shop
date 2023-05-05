import styles from '@/styles/Navbar.module.css'
import LogoImg2 from "../img/newlogo2.png";
import Link from 'next/link'
import Image from 'next/image'
import { useState , useContext} from "react";
import FullCart from "./FullCart";
import EmptyCart from "./EmptyCart";
import { AppContext } from '@/context/AppContext'
import { FaShoppingCart , FaTimes } from "react-icons/fa";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const Navbar =()=> {
  const [sticky, setSticky] = useState(false);
  const { cartItems , toggleCart , showCart , totalQuantities} = useContext(AppContext);

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  // window.addEventListener("scroll", handleScroll);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={inter.className}>
      {/* overlay */}
      <div
        onClick={()=>{toggleCart()}}
        className={`${styles.overlay} ${ showCart ? styles.openflex : styles.closedflex}`}
      ></div>

      {/* cart */}
      {showCart &&
      <div className={`${styles.cart} ${cartItems ? styles.opencart : styles.closedcart}`}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            Your Shopping Cart ({cartItems.length})
          </h2>
          <FaTimes onClick={()=>{toggleCart()}} className={styles.icon}></FaTimes>
        </div>

        <div className={styles.body}>
          {cartItems.length < 1 ? (
            <EmptyCart openCart={toggleCart} />
          ) : (
            <FullCart />
          )}
        </div>
      </div>}

      {/* Navbar */}
      <nav className={styles.navbar}>
        <div className={styles.container}>
          <div className={`${styles.navContainer} ${sticky ? styles.sticky : ""}`}>
            <Link href="/">
              <Image
                onClick={scrollToTop}
                src={LogoImg2}
                alt="logo"
                className={styles.logo}
              />
            </Link>
            <div className={styles.links}>
              <Link onClick={() => window.scrollTo(0, 0)} href="/categories/all">
                categories
              </Link>
              <Link
                onClick={() => window.scrollTo(0, 0)}
                href="/product/19"
              >
                product page
              </Link>
              <div onClick={()=>{toggleCart()}}>
                <FaShoppingCart />
                {totalQuantities > 0 && (
                  <span className={styles.number}>{totalQuantities}</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;