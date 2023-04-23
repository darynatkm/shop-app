

import { useContext } from "react";
import Context from "../Context";

const NavBar = () => {

    const { cartCount, displayShoppingCart} = useContext(Context);
    

    return (
            <div className="topnav">
                <a href="#home">Home</a>
                <a className="active"  href="#producs">Products</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
                <div onClick={displayShoppingCart}>
                    <p>{cartCount}</p>
                    <i className="fa-solid fa-cart-arrow-down"></i>
                </div>

            </div>
    )
}
export default NavBar ;