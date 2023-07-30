import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import '../styles/ProductTile.scss';

const ProductTile = ({ product }) => {
    const { addToCart } = useContext(ProductContext);

    const handleAddToCartClick = () => {
        addToCart(product.id);
    };

    return (
        <div className="ProductTile">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            {product.discountedPrice ? (
                <>
                    <span className="price discounted">${product.price}</span>
                    <span className="price">${product.discountedPrice}</span>
                </>
            ) : (
                <span className="price">${product.price}</span>
            )}
            <div className="rating">{product.rating}</div>
            <button onClick={handleAddToCartClick}>Add to Cart</button>
        </div>
    );
};

export default ProductTile;