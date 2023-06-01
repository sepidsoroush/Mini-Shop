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
      setProducts(dataObj);
    };

    fetchProducts(
      {
        url: "https://e-commerce-bed4b-default-rtdb.firebaseio.com/products.json",
      },
      transformData
    );
  }, [fetchProducts]);

  const starProducts = products
    .filter((item) => item)
    .filter((item) => item.star);
  const trendProducts = products
    .filter((item) => item)
    .filter((item) => item.trend);

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
