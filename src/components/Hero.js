import Image from 'next/image'
import Link from 'next/link'
import Main1 from "../img/header/home-img-1.jpg";
import Main2 from "../img/header/home-img-2.jpg";
import Main3 from "../img/header/home-img-3.jpg";
import Main4 from "../img/header/home-img-4.jpg";

const links = [
    {id : 1 , title : 'Live Comfortably' , image : Main1 , url : '/'},
    {id : 2 , title : 'Skincare' , image : Main2 , url : '/'},
    {id : 3 , title : 'Kitchen' , image : Main3 , url : '/'},
    {id : 4 , title : 'Electronics' , image : Main4 , url : '/'}
]
const Hero = ()=> {
  return (
    <div className="pt-48">
        <div className="grid grid-cols-3 grid-rows-2 gap-5 mt-5">
            {links.map((item)=>{
                const {id,title,image,url} = item;
                return(
                    <div key={id}>
                        <Link href={url}>
                            <Image src={image} alt={title} />
                            <p>{title}</p>
                        </Link>
                    </div>
                )
            })}
        {/* <div className="featured grid-one">
            <Link to="categories/furnitures">
            <div id="img1" className="lil-overlay"></div>
            <img src={Main1} alt="img1" />
            <p className="main-description">Live Comfortably</p>
            </Link>
        </div>
        <div className="featured grid-two">
            <Link to="categories/skin-care">
            <div id="img2" className="lil-overlay"></div>
            <img src={Main2} alt="img2" />
            <p className="main-description">Skincare</p>
            </Link>
        </div>
        <div className="featured grid-four">
            <Link to="categories/kitchen">
            <div id="img3" className="lil-overlay"></div>
            <img src={Main3} alt="img3" />
            <p className="main-description">Kitchen</p>
            </Link>
        </div>
        <div className="featured grid-four-low">
            <Link to="categories/electronics">
            <div id="img4" className="lil-overlay"></div>
            <img src={Main4} alt="img4" />
            <p className="main-description">Electronics</p>
            </Link>
        </div> */}
        </div>
    </div>
  );
}

export default Hero;