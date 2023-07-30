// ProductContext.js
import React, { useState, useEffect, createContext } from 'react';
import productsData from '../data/products.json';

export const ProductContext = createContext();

const ProductProvider = (props) => {
    const [products, setProducts] = useState([]);
    const [displayProducts, setDisplayProducts] = useState([]);
    const [loadCount, setLoadCount] = useState(1);
    const [sort, setSort] = useState('name_asc');
    
    // Get the unique categories
    const categories = Array.from(new Set(productsData.map(product => product.category)));
    
    // Initialize the filter with the first category
    const [filter, setFilter] = useState({ color: null, price: null, category: categories[0] });

    const addToCart = (id) => {
        console.log(`Product with id ${id} added to cart`);
    };

    useEffect(() => {
        setProducts(productsData);
        // Now displayProducts will only contain products from the first category at first
        setDisplayProducts(productsData.filter(product => product.category === filter.category).slice(0, loadCount * 20));
    }, [loadCount]);

    useEffect(() => {
        // Implement sorting and filtering logic here
        // This will depend on the specific fields in your JSON data
        // Here we're just re-displaying all products

        let filteredProducts = products;

        if (filter.category) {
            filteredProducts = filteredProducts.filter(
                (product) => product.category === filter.category
            );
        }

        setDisplayProducts(filteredProducts.slice(0, loadCount * 20));
    }, [sort, filter, products, loadCount]);

    return (
        <ProductContext.Provider value={{ displayProducts, loadCount, setLoadCount, sort, setSort, filter, setFilter, addToCart }}>
            {props.children}
        </ProductContext.Provider>
    );
};

export default ProductProvider;
