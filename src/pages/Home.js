import Banner from "@/components/Products/Banner";
import Hero from "@/components/Products/Hero";
import StarProducts from "@/components/Products/StarProducts";
import Trending from "@/components/Products/Trending";
import Banner1 from "../img/banner/banner1.jpg";
import Banner2 from "../img/banner/banner2.jpg";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [httpError, setHttpError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      const response = await fetch(
        "https://e-commerce-bed4b-default-rtdb.firebaseio.com/products.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      setProducts(data);
      setIsLoading(false);
    };
    fetchProducts().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  const starProducts = products
    .filter((item) => item)
    .filter((item) => item.star);
  const trendProducts = products
    .filter((item) => item)
    .filter((item) => item.trend);

  // if (isLoading) {
  //   return (
  //     <section>
  //       <p>Loading...</p>
  //     </section>
  //   );
  // }

  // if (httpError) {
  //   return (
  //     <section>
  //       <p>{httpError}</p>
  //     </section>
  //   );
  // }
  return (
    <>
      <Hero />
      {isLoading ? <p>Loading...</p> : <StarProducts items={starProducts} />}
      {httpError && <p>{httpError}</p>}
      <Banner
        type="normal"
        title="Creative harmonious living"
        text=" RAOUF Products are all made to standard sizes so that you can mix and match them freely."
        img={Banner1}
      />
      {isLoading ? <p>Loading...</p> : <Trending items={trendProducts} />}
      {httpError && <p>{httpError}</p>}
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
