import { useState } from "react";
import Image from "next/image";
import styles from "@/styles/ProductImgAlbum.module.css";

const ProductImgAlbum = (props) => {
  const [image, setImage] = useState(props.mainImg);

  const changeImage = (e) => {
    setImage(e.target.src);
  };

  return (
    <div className={styles.album}>
      <div className={styles.mainImg}>
        {image && (
          <Image src={image} alt="product" width={435} height={435} priority />
        )}
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
              width={500}
              height={500}
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
