import { items } from "../../components/AllData";
import { useRouter } from 'next/router'
import { useState , useContext, useEffect } from "react";
import Link from 'next/link'
import Image from 'next/image'

const Product =()=> {
    const router = useRouter()
    const [item, setItem] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [image, setImage] = useState(item.img);
    // const { addToCart } = useContext(CartContext);
    const [notify, setNotify] = useState(false);

    const changeImage = (e) => {
        setImage(e.target.src);
    };

    const increase = () => {
        if (quantity >= 1) {
            setQuantity(quantity + 1);
        }
    };

    const decrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const calcPrice = (quantity) => {
        return quantity * item.price;
    };

    const showNotify = () => {
        setNotify(!notify);
    };

    useEffect(() => {
        if (router.query.id) {
            const filteredItem = items.filter((item) => item.id === parseInt(router.query.id));
            setItem(filteredItem[0]);
        }
    }, [router.query.id]);

    return (
    <>
        {/* <div
        onAnimationEnd={() => setNotify(false)}
        className={`notify ${notify ? "slide-in" : ""}`}
        >
        <p>Item has been added to the cart &nbsp; ✅</p>
        </div> */}
        <Link href={'/categories/all'}>
            Back to Categories
        </Link>

        <div className="product-page-div">
        <div className="container">
            <div className="product-div">
            <h3 className="product-big-name">{item.description}</h3>
            <div className="product-left">
                <div className="big-img">
                {image && <Image src={image} alt="product"
                width={500}
                height={500}
                priority
                 />}
                </div>
                <div className="small-imgs">
                {item.img && <Image
                    onMouseOver={changeImage}
                    width={500}
                    height={500}
                    src={item.img}
                    alt="product"
                    priority
                />}
                {item.otherImgs && item.otherImgs[0] &&
                    <Image
                    onMouseOver={changeImage}
                    width={500}
                    height={500}
                    src={item.otherImgs[0]}
                    alt="product"
                    priority
                    />
                }
                {item.otherImgs && item.otherImgs[1] &&
                    <Image
                    onMouseOver={changeImage}
                    width={500}
                    height={500}
                    src={item.otherImgs[1]}
                    alt="product"
                    priority
                    />
                }
                </div>
            </div>
            <div className="product-right">
                <p className="product-spec">{item.specs}</p>
                <div className="product-quant">
                <p>Quantity</p>
                <div className="product-btns">
                    <button onClick={decrease}>-</button>
                    <p className="quantity">{quantity}</p>
                    <button onClick={increase}>+</button>
                </div>
                <p className="product-price">{calcPrice(quantity)}.00$</p>
                </div>
                <div className="atc-buy">
                <button
                    onClick={() => {
                    // addToCart(item);
                    showNotify();
                    }}
                    className="atc-btn"
                >
                    add to cart
                </button>
                <button className="buy-btn">buy now</button>
                </div>
            </div>
            </div>

            <div className="specifications">
            <div className="spec">
                <p className="spec-title">Texture:</p>
                <p className="title-desc">{item.texture}</p>
            </div>
            <div className="spec">
                <p className="spec-title">Weight:</p>
                <p className="title-desc">{item.weight}</p>
            </div>
            <div className="spec">
                <p className="spec-title">Size:</p>
                <p className="title-desc">{item.size}</p>
            </div>
            </div>
        </div>
        </div>
    </>
    );
}

export default Product;