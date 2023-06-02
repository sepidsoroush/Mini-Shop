import styles from "@/styles/Navbar.module.css";
import LogoImg2 from "../../assets/logo/newlogo2.png";
import Link from "next/link";
import Image from "next/image";
import { Inter } from "next/font/google";
import CartButton from "../Cart/CartButton";

const inter = Inter({ subsets: ["latin"] });

const Navbar = (props) => {
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
    <nav className={`${styles.navbar} ${inter.className}`}>
      <div className={styles.navContainer}>
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
          <Link onClick={() => window.scrollTo(0, 0)} href="/product/19">
            products
          </Link>
          <CartButton onClick={openCartHandler} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
