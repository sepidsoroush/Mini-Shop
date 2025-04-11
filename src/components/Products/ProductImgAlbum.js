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

  const changeImage = (src) => {
    setImage(src);
  };

  return (
    <div className={styles.album}>
      <div className={styles.mainImg}>
        <Image
          src={image || url}
          alt="Main img"
          width={435}
          height={435}
          priority
        />
      </div>
      <div className={styles.container}>
        <div className={styles.img}>
          {props.mainImg && (
            <Image
              onMouseOver={() => changeImage(props.mainImg)}
              width={435}
              height={435}
              src={props.mainImg}
              alt="image product 1"
              priority
            />
          )}
        </div>
        <div className={styles.img}>
          {props.otherImgs && props.otherImgs[0] && (
            <Image
              onMouseOver={() => changeImage(props.otherImgs[0])}
              width={435}
              height={435}
              src={props.otherImgs[0]}
              alt="image product 2"
              priority
            />
          )}
        </div>
        <div className={styles.img}>
          {props.otherImgs && props.otherImgs[1] && (
            <Image
              onMouseOver={() => changeImage(props.otherImgs[1])}
              width={435}
              height={435}
              src={props.otherImgs[1]}
              alt="image product 3"
              priority
            />
          )}
        </div>
      </div>
    </div>
  );
};
export default ProductImgAlbum;
