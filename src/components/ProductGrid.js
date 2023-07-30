// ProductGrid.js
import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import ProductTile from "./ProductTile";
import '../styles/ProductGrid.scss';

const ProductGrid = () => {
    const { displayProducts } = useContext(ProductContext);

    return (
        <div className="ProductGrid">
            {displayProducts.map(product => (
                <ProductTile key={product.id} product={product} />
            ))}
        </div>
    );
}

export default ProductGrid;