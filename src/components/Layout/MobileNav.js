import { useState } from "react";
import styles from "@/styles/MobileNav.module.css";
import Link from "next/link";
import { Inter } from "next/font/google";
import { FaTimes } from "react-icons/fa";

const inter = Inter({ subsets: ["latin"] });

const MobileNav = (props) => {
  return (
    <div
      className={`${inter.className} ${styles.mobileNav} ${
        props.status ? styles.openflex : styles.closedflex
      }`}
    >
      <FaTimes
        onClick={props.onShowMobileNav}
        className={styles.icon}
      ></FaTimes>
      <div className={styles.mobileLinks}>
        <Link onClick={props.onShowMobileNav} href="/categories/furniture">
          Furniture
        </Link>
        <Link onClick={props.onShowMobileNav} href="/categories/electronic">
          Electronics
        </Link>
        <Link onClick={props.onShowMobileNav} href="/categories/Kitchen">
          Kitchen
        </Link>
        <Link onClick={props.onShowMobileNav} href="/categories/chair">
          Chairs
        </Link>
        <Link onClick={props.onShowMobileNav} href="/categories/lamp">
          Lamps
        </Link>
        <Link onClick={props.onShowMobileNav} href="/categories/skincare">
          Skin Care
        </Link>
      </div>
    </div>
  );
};

export default MobileNav;
