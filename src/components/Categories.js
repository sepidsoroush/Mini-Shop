import { useState } from "react";
import Link from 'next/link'
import styles from '@/styles/Categories.module.css'
import { FaAngleLeft } from "react-icons/fa";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const Categories = () => {
    const links = [
        {id:1,title:'All',url:'/categories/all'},
        {id:1,title:'Furnitures',url:'/categories/furnitures'},
        {id:1,title:'Electronics',url:'/categories/electronics'},
        {id:1,title:'Lamps',url:'/categories/lamps'},
        {id:1,title:'Kitchen',url:'/categories/kitchen'},
        {id:1,title:'Chairs',url:'/categories/chairs'},
        {id:1,title:'Skin Care',url:'/categories/skincare'},
    ]
    const [btnName, setBtnName] = useState("All");
    const handleBtnName = (e) => {
        setBtnName(e);
    };
    return (
        <div className={inter.className}>
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.title}>
                    <Link 
                        href="/" 
                        className={styles.back}
                        onClick={() => window.scrollTo(0, 0)} >
                        <FaAngleLeft /><span>Home</span>
                    </Link>
                    <h3>{btnName}</h3>
                </div>
                <div className={styles.filters}>
                    {links.map((item)=>{
                        const {id , title, url} = item;
                        return(
                            <Link 
                                key={id} 
                                href={url}
                                onClick={() => handleBtnName({title})}
                                
                            >
                                <button className={styles.btn}>{title}</button>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
        </div>
  );
}

export default Categories;