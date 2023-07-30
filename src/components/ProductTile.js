import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import Rating from "./Rating";
import '../styles/ProductTile.scss';

const ProductTile = ({ product }) => {
    const { addToCart } = useContext(ProductContext);

    const handleAddToCartClick = () => {
        addToCart(product.id);
    };

    return (
        <div className="ProductTile">
            <img src={product.image} alt={product.name} />

            <div className="product-details">
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                {product.discountedPrice ? (
                    <>
                        <span className="price">${product.discountedPrice}</span>
                        <span className="price discounted">${product.price}</span>
                    </>
                ) : (
                    <span className="price">${product.price}</span>
                )}
                <div className="rating">
                    <Rating value={product.rating} />
                </div>
                <div className="rating">{product.rating}</div>
                <button onClick={handleAddToCartClick} className="add-to-cart-btn">Add to Cart</button>
            </div>
        </div>
    );
};

export default ProductTile;