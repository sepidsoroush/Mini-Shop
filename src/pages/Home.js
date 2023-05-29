import Banner from "@/components/Products/Banner";
import Hero from "@/components/Products/Hero";
import StarProducts from "@/components/Products/StarProducts";
import Trending from "@/components/Products/Trending";
import Banner1 from "../img/banner/banner1.jpg";
import Banner2 from "../img/banner/banner2.jpg";

const HomePage = () => {
  return (
    <>
      <Hero />
      <StarProducts />
      <Banner
        type="normal"
        title="Creative harmonious living"
        text=" RAOUF Products are all made to standard sizes so that you can mix and match them freely."
        img={Banner1}
      />
      <Trending />
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
