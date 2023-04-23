import { useContext } from "react";
import Context from "../Context";
import ShoppingCartItem from './ShoppingCartItem';


const ShoppingCart = ({ cart }) => {

    const { closeShoppingCart, continueShopping, totalPrice} = useContext(Context);



    return (
        <>
            <div id="myModal" className="modal">
                <div className="modal-content">
                <span className="close" onClick={closeShoppingCart}>&times;</span>
                <ul className="shopping-cart">
                    { cart.map((product) => <ShoppingCartItem 
                                                    id = {product.id}
                                                    title={ product.title } 
                                                    price = {product.price}
                                                    quantity = {product.quantity}
                                                    totalPrice = {product.price * product.quantity}
                                                />
                                )
                    }

                 </ul>
                 <b><p className="totalPrice">{`Total price: $${Math.round(totalPrice * 100)/100}`}</p></b>
                 <div className="shopping-cart-btn-block">
                    <button className="shopping-cart-btn" onClick={continueShopping}>Continue Shopping</button>
                    <button className="shopping-cart-btn">Pay</button>
                 </div>

                </div>
            </div>
        </>
            )
        }
export default ShoppingCart;
        



