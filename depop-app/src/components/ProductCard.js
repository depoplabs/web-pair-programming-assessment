import "./ProductCard.css"

export const ProductCard = ({product}) => {
    console.log(product);

    return (
        <div className="productCardContainer">
            <div className="productCard">
                <div className="imageContainer">
                    <img src={product.img}/>
                </div>
                <div className={"details"}>
                    <span>{product.description}</span>
                    <span>{product.brand}</span>
                    <span>{product.size}</span>
                    <span><b>£{product.price}</b></span>
                </div>
            </div>
        </div>
    )
}