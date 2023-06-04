import styles from "@/styles/Newletter.module.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

function Newsletter() {
  return (
    <div className={inter.className}>
      <div className={styles.news}>
        <div>
          <h2>Newsletter</h2>
          <form name="newsletter">
            <input type="email" name="email" placeholder="your@email.com" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
