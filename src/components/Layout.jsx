import { React } from 'react';
import {NavLink, Outlet} from "react-router-dom"
import { useContext } from "react";
import Context from "../Context";

const Layout = () => {

const { cartCount, displayShoppingCart} = useContext(Context);
const setActive = ({isActive}) => isActive ? 'menu__item_active' : '';
    return (
        <div className='container'>
            <header className="topnav">
            <NavLink className={setActive} to="/">Home</NavLink>
            <NavLink className={setActive} to="/products">Products</NavLink>
            <NavLink className={setActive} to="/contact">Contact</NavLink>
            <NavLink className={setActive} to="/about">About</NavLink>
            <div onClick={displayShoppingCart}>
                    <p>{cartCount}</p>
                    <i className="fa-solid fa-cart-arrow-down"></i>
                </div>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;






// const NavBar = () => {

    

//     return (
//             <div className="topnav">
//                 <a href="#home">Home</a>
//                 <a className="active"  href="#producs">Products</a>
//                 <a href="#contact">Contact</a>
//                 <a href="#about">About</a>


//             </div>
//     )
// }
// export default NavBar ;