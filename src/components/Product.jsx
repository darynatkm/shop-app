
import { useContext } from "react";
import Context from "../Context";
import {Link} from "react-router-dom"

const Prod = (product) => {

    const { addToCart, displayProductPage} = useContext(Context);


    return (
        <>
        <div className="card">
        <Link to={`/products/${product.id}`}>
            <div onClick={ () => displayProductPage(product.id)}>
                <img src={`${product.image}`} alt="product"></img>
                <h3>{product.title}</h3>
                <p className="price">${product.price}</p>
                <p className="desc">{product.desc}</p>
            </div>
            </Link>
            <div><button onClick = {() => { addToCart(product)}}><i className="fa-solid fa-cart-shopping"></i></button></div>
        </div>
        </>
    )
}
export default Prod ;
