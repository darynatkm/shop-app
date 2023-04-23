
import { useContext } from "react";
import Context from "../Context";
import {Link} from "react-router-dom"
const ProductPage = ({ product }) => {

    const { addToCart, goBack} = useContext(Context);

    return (
        <>
        <button className="goBack" onClick={goBack}>Go Back</button>
        <div className="product-page-card">
            <img src={`${product.image}`} alt="product"></img>
            <div className="product-page-card-text">
                <h3>{product.title}</h3>
                <p className="price">{`Price: $${product.price}`}</p>
                {/* <p>{`Rating: ${product.rating.rate}`}</p>
                <p>{`Reviews: ${product.rating.count}`}</p> */}
                <p>{product.description}</p>
                <button onClick = {() => { addToCart(product)}}><i className="fa-solid fa-cart-shopping"></i></button>

            </div>
        </div>
        </>
    )
}
export default ProductPage ;
