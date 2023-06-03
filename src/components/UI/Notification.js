import styles from "@/styles/Notification.module.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Notification = (props) => {
  const btnClasses = `${inter.className} ${styles.notify} ${
    props.status ? styles.slidein : ""
  }`;

  return (
    <div className={btnClasses}>
      <p>{props.message}</p>
    </div>
  );
};

export default Notification;
