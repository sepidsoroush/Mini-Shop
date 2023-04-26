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
        <div className="grid grid-cols-3 grid-rows-2 gap-5 mt-5 ">
            {links.map((item)=>{
                const {id,title,image,url} = item;
                return(
                    <div key={id} className='relative cursor-pointer overflow-hidden'>
                        <Link href={url}>
                            <div className='absolute w-full h-full top-0 left-0 bg-black bg-opacity-30 hover:bg-opacity-50 transition-all duration-300 ease-in z-10'></div>
                            <Image src={image} alt={title} className='object-cover w-full h-full' />
                            <p className='absolute bottom-8 left-8 text-white text-5xl font-semibold'>{title}</p>
                        </Link>
                    </div>
                )
            })}
        </div>
    </div>
  );
}

export default Hero;