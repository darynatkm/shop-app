import React from 'react';
import { useContext } from "react";
import Context from "../../Context";

import ProductList from '../ProductList';
import ProductPage from '../ProductPage';


    

const Products = () => {

    const { productPageDisplayed, product, products} = useContext(Context);

    return (
        <div>
            <h1>Products</h1>
            <ProductList products = {products}></ProductList>
             {/* {productPageDisplayed ? <ProductPage product = {product}></ProductPage> : <ProductList products = {products}></ProductList>} */}

        </div>
    );
};

export default Products;