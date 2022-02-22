import React from 'react';

import {ProductCard} from "./ProductCard";
import {useGetProducts} from "../hooks/useGetProducts";
import "./ProductsContainer.css"

export const ProductsContainer = () => {

    const {products} = useGetProducts('https://5c78274f6810ec00148d0ff1.mockapi.io/api/v1/products');

    return (
        <React.Fragment>
            {products &&
                <div className="subTitle"><b>Results</b></div>
            }
            <div className="productsContainer">
                {products && products.map(p => (
                    <ProductCard product={p} key={p.id}/>
                ))}
            </div>
        </React.Fragment>
    )
}