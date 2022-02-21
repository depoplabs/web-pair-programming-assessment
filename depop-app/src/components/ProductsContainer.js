import React from 'react';

import {ProductCard} from "./ProductCard";
import {useGetProducts} from "../hooks/useGetProducts";
import "./ProductsContainer.css"

export const ProductsContainer = () => {

    const {products, loading} = useGetProducts('https://5c78274f6810ec00148d0ff1.mockapi.io/api/v1/products');

    return (
        <React.Fragment>
            {!loading && products &&
                <div className={"subTitle"}><b>{products.length} Results</b></div>
            }
            {loading && <span>Loading items</span>}
            <div className="productsContainer">
                {!loading && products && products.map(p => (
                    <ProductCard product={p} key={p.id}/>
                ))}
            </div>
        </React.Fragment>
    )
}