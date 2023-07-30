import React from 'react';
import '../styles/ProductDescription.scss';

const ProductDescription = ( {category} ) => {
    return (
        <div className="ProductDescription">
            <h2 className="category-name">{category}</h2>
        </div>
    );
};

export default ProductDescription;
