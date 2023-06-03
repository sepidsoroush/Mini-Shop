import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "@/styles/ProductImgAlbum.module.css";

const ProductImgAlbum = (props) => {
  const url =
    "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";
  const [image, setImage] = useState(null);

  useEffect(() => {
    setImage(props.mainImg);
  }, [props.mainImg]);

  const changeImage = (e) => {
    setImage(e.target.src);
  };

  return (
    <div className={styles.album}>
      <div className={styles.mainImg}>
        <Image
          src={image || url}
          alt="product"
          width={435}
          height={435}
          priority
        />
      </div>
      <div className={styles.container}>
        <div className={styles.img}>
          {props.mainImg && (
            <Image
              onMouseOver={changeImage}
              width={435}
              height={435}
              src={props.mainImg}
              alt="product"
              priority
            />
          )}
        </div>
        <div className={styles.img}>
          {props.otherImgs && props.otherImgs[0] && (
            <Image
              onMouseOver={changeImage}
              width={435}
              height={435}
              src={props.otherImgs[0]}
              alt="product"
              priority
            />
          )}
        </div>
        <div className={styles.img}>
          {props.otherImgs && props.otherImgs[1] && (
            <Image
              onMouseOver={changeImage}
              width={435}
              height={435}
              src={props.otherImgs[1]}
              alt="product"
              priority
            />
          )}
        </div>
      </div>
    </div>
  );
};
export default ProductImgAlbum;
