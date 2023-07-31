import React from 'react';
import '../styles/ProductDescription.scss';

const ProductDescription = ( {category} ) => {
    return (
        <div className="ProductDescription">
            <h2 className="category-name">{!category ? `All` : category}</h2>
            <p className="category-description">
                {!category ? `Here are all the products that we offer!` : `Here are all the ${category.toLowerCase()} we have to offer!`}
            </p>
        </div>
    );
};

export default ProductDescription;
