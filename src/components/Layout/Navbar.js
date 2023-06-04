import { useState } from "react";
import styles from "@/styles/Navbar.module.css";
import LogoImg2 from "../../assets/logo/newlogo2.png";
import Link from "next/link";
import Image from "next/image";
import { Inter } from "next/font/google";
import CartButton from "../Cart/CartButton";
import { FaBars, FaTimes } from "react-icons/fa";
import MobileNav from "./MobileNav";

const inter = Inter({ subsets: ["latin"] });

const Navbar = (props) => {
  const [mobileNav, setMobileNav] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const openCartHandler = () => {
    props.onOpenCart();
  };

  const mobileNavbarHandler = () => {
    setMobileNav(!mobileNav);
  };

  return (
    <>
      <MobileNav onShowMobileNav={mobileNavbarHandler} status={mobileNav} />
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
            <Link onClick={() => window.scrollTo(0, 0)} href="/product/p19">
              products
            </Link>
            <CartButton onClick={openCartHandler} />
          </div>
          <div className={styles.hamburger}>
            <CartButton
              onClick={openCartHandler}
              className={styles.MobileCart}
            />
            <FaBars
              onClick={mobileNavbarHandler}
              className={styles.bars}
            ></FaBars>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
