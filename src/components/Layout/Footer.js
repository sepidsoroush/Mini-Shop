import styles from '@/styles/Footer.module.css'
import Link from 'next/link'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

function Footer() {
  return (
    <div className={inter.className}>
      <footer className={styles.footer}>
        <div className={styles.links}>
          <Link href="#" className={styles.item}>About</Link>
          <Link href="#" className={styles.item}>Store locator</Link>
          <Link href="#" className={styles.item}>FAQs</Link>
          <Link href="#" className={styles.item}>News</Link>
          <Link href="#" className={styles.item}>Careers</Link>
          <Link href="#" className={styles.item}>Contact Us</Link>
        </div>
        <p className={styles.copyright}>
          Coded by &nbsp;
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/sepidsoroush"
          >
            SepiDev
          </a>
        </p>
        <p className={styles.copyright}>
          Designed by &nbsp;
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Abderraouf-Rahmani"
          >
            Abderraouf
          </a>
        </p>
      </footer>
    </div>
  );
}

export default Footer;