import "./ProductCard.css";

export const ProductCard = ({ product }) => {
  return (
    <div className="productCardContainer">
      <div className="productCard">
        <div className="imageContainer">
          <img src={`https://picsum.photos/400?random=${product.id}`} alt="" />
          {product.sold && (
            <div className="soldOverlay">
              <b>SOLD</b>
            </div>
          )}
        </div>
        <div className="details">
          <span>{product.description}</span>
          <span>{product.brand}</span>
          <span>{product.size}</span>
          <span>
            <b>£{product.price}</b>
          </span>
        </div>
      </div>
    </div>
  );
};
