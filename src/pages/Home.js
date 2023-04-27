import Banner from "@/components/Banner";
import Categories from "@/components/Categories";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";
import StarProducts from "@/components/StarProducts";
import Trending from "@/components/Trending";
import Banner1 from '../img/banner/banner1.jpg'
import Banner2 from '../img/banner/banner2.jpg'

const HomePage = ()=> {
    return (
      <div>
        <Categories />
        <Hero />
        <StarProducts />
        <Banner
            type='normal'
            title="Creative harmonious living"
            text=" RAOUF Products are all made to standard sizes so that you can mix and match them freely."
            img={Banner1}
         />
         <Trending />
         <Banner
            type='reverse'
            title="Comfortable & Elegante Living"
            text=" RAOUF Products are all made to standard sizes so that you can mix and match them freely."
            img={Banner2}
         />
         <Newsletter />
         <Footer />
      </div>
    );
  }
  
  export default HomePage;