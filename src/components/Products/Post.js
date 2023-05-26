import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Post.module.css";

const Post = (props) => {
  const { id, img, description, price } = props;
  return (
    <>
      <Link
        key={id}
        className={styles.product}
        onClick={() => window.top(0, 0)}
        href={`/product/${id}`}
      >
        <Image src={img} alt={description} className={styles.image} priority />
        <p className={styles.details}>{description}</p>
        <p className={styles.price}>{price}$</p>
      </Link>
    </>
  );
};

export default Post;
