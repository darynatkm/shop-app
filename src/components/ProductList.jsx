import Prod from "./Product";

const Productlist = ({ products }) => {
    return (
        <>

            <h2>Products</h2>
            <ul className="product-list">
                { products.map((product) => <Prod 
                                                key={product.id}
                                                title={ product.title } 
                                                image = {product.image}
                                                desc={ product.description }
                                                price = {product.price}
                                                id = {product.id}

                                            />
                            )
                }
            </ul>
        </>
    );
}

export default Productlist;