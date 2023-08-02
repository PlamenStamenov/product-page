import React, { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import Rating from "./Rating";
import '../styles/ProductTile.scss';

const ProductTile = ({ product }) => {
    const { addToCart } = useContext(ProductContext);

    const handleAddToCartClick = () => {
        addToCart(product.id);
        alert('Product added to cart');
    };

    return (
        <div className="ProductTile">
            <div className="product-img">
                <img src={product.image} alt={product.name} />
            </div>

            <div className="product-details">
                <h2>{product.name}</h2>
                <p>{product.description}</p>

                <div className="rating">
                    <Rating value={product.rating} />
                </div>

                <div className="prices">
                    {product.discountedPrice ? (
                        <>
                            <span className="price">${product.price}</span>
                            <span className="price discounted">${product.discountedPrice}</span>
                        </>
                    ) : (
                        <span className="price">${product.price}</span>
                    )}
                </div>

                <button onClick={handleAddToCartClick} className="add-to-cart-btn">Add to Cart</button>
            </div>
        </div>
    );
};

export default ProductTile;
