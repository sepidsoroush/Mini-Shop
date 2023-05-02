import styles from '@/styles/Navbar.module.css'
import LogoImg2 from "../img/newlogo2.png";
import Link from 'next/link'
import Image from 'next/image'
import { useContext, useState } from "react";
import FullCart from "./FullCart";
import EmptyCart from "./EmptyCart";
import { CartContext } from "../pages/product/[id]";
import { FaShoppingCart , FaTimes } from "react-icons/fa";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

function Navbar() {
  const [sticky, setSticky] = useState(false);
  const [cart, setCart] = useState(false);
  const { cartItem } = useContext(CartContext);

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  const openCart = () => {
    setCart(!cart);
  };

  window.addEventListener("scroll", handleScroll);

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
        onClick={openCart}
        className={`${styles.overlay} ${ cart ? styles.openflex : styles.closedflex}`}
      ></div>

      {/* cart */}
      <div className={`${styles.cart} ${cart ? styles.opencart : styles.closedcart}`}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            Your Shopping Cart ({cartItem.length})
          </h2>
          <FaTimes onClick={openCart} className={styles.icon}></FaTimes>
        </div>

        <div className={styles.body}>
          {cartItem.length < 1 ? (
            <EmptyCart openCart={openCart} />
          ) : (
            <FullCart />
          )}
        </div>
      </div>

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
                href="/pages/product/19"
              >
                product page
              </Link>
              <div onClick={openCart}>
                <FaShoppingCart />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;