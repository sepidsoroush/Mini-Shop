import styles from "@/styles/Navbar.module.css";
import LogoImg2 from "../../img/newlogo2.png";
import Link from "next/link";
import Image from "next/image";
import { useState, useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Inter } from "next/font/google";
import CartContext from "@/context/cart-context";

const inter = Inter({ subsets: ["latin"] });

const Navbar = (props) => {
  const [sticky, setSticky] = useState(false);
  const { totalAmount } = useContext(CartContext);

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

  const openCartHandler = () => {
    props.onOpenCart();
  };

  return (
    <div className={inter.className}>
      <nav className={styles.navbar}>
        <div className={styles.container}>
          <div
            className={`${styles.navContainer} ${sticky ? styles.sticky : ""}`}
          >
            <Link href="/">
              <Image
                onClick={scrollToTop}
                src={LogoImg2}
                alt="logo"
                className={styles.logo}
              />
            </Link>
            <div className={styles.links}>
              <Link
                onClick={() => window.scrollTo(0, 0)}
                href="/categories/all"
              >
                categories
              </Link>
              <Link onClick={() => window.scrollTo(0, 0)} href="/product/19">
                product page
              </Link>
              <div onClick={openCartHandler}>
                <FaShoppingCart />
                {totalAmount > 0 && (
                  <span className={styles.number}>{totalAmount}</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
