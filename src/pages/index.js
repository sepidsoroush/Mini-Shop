import Banner from "@/components/Products/Banner";
import Hero from "@/components/Products/Hero";
import StarProducts from "@/components/Products/StarProducts";
import Trending from "@/components/Products/Trending";
import Banner1 from "../img/banner/banner1.jpg";
import Banner2 from "../img/banner/banner2.jpg";
import { useEffect, useState } from "react";
import useHttp from "@/hooks/use-http";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const { isLoading, error, sendRequest: fetchProducts } = useHttp();

  useEffect(() => {
    const transformData = (dataObj) => {
      const loadedData = [];

      for (const key in dataObj) {
        loadedData.push({
          id: key,
          category: dataObj[key].category,
          path: dataObj[key].id,
          img: dataObj[key].img,
          description: dataObj[key].description,
          price: dataObj[key].price,
          otherImgs: dataObj[key].otherImgs,
          specs: dataObj[key].specs,
          texture: dataObj[key].texture,
          weight: dataObj[key].weight,
          size: dataObj[key].size,
          star: dataObj[key].star,
          trend: dataObj[key].trend,
        });
      }
      setProducts(loadedData);
    };

    fetchProducts(
      {
        url: "https://e-commerce-bed4b-default-rtdb.firebaseio.com/products.json",
      },
      transformData
    );
  }, []);

  const starProducts = products.filter((item) => item.star);
  const trendProducts = products.filter((item) => item.trend);

  return (
    <>
      <Hero />
      {isLoading ? <p>Loading...</p> : <StarProducts items={starProducts} />}
      {error && <p>{error}</p>}
      <Banner
        type="normal"
        title="Creative harmonious living"
        text=" RAOUF Products are all made to standard sizes so that you can mix and match them freely."
        img={Banner1}
      />
      {isLoading ? <p>Loading...</p> : <Trending items={trendProducts} />}
      {error && <p>{error}</p>}
      <Banner
        type="reverse"
        title="Comfortable & Elegante Living"
        text=" RAOUF Products are all made to standard sizes so that you can mix and match them freely."
        img={Banner2}
      />
    </>
  );
};

export default HomePage;
