
import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react';
import ProductPage from '../ProductPage';
import { useContext } from "react";
import Context from "../../Context";

const Single = () => {
    const {product} = useContext(Context);


    return (
        <ProductPage product = {product}></ProductPage>

    );
};

export default Single;