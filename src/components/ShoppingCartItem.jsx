
import { useContext } from "react";
import Context from "../Context";

const ShoppingCartItem = (item) => {

    const { addToCart, displayProductPage, setUpdate, deleteItemFromCart} = useContext(Context);


    return (
        <>
        <div className="product">
            <h3 className="product-details">{item.title}</h3>
            <p className="product-price">{item.price}</p>
            <input type="text" value={item.quantity} min="1" className="product-quantity" onChange={(e) => setUpdate(e.target.value, item.id)}></input>
                                {/* }
                    onKeyDown={handleUpdatedDone} */}
            <p className="product-line-price">{Math.round(item.totalPrice * 100) / 100}</p>
            <button className="product-removal" onClick={() => deleteItemFromCart(item.id)}>Delete</button>
        </div>
        </>
    )
}
export default ShoppingCartItem;
