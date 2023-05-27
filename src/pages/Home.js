import Banner from "@/components/Banner";
import Hero from "@/components/Hero";
import StarProducts from "@/components/StarProducts";
import Trending from "@/components/Trending";
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
