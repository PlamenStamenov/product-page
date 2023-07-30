// ProductContext.js
import React, { useState, useEffect, createContext } from 'react';
import productsData from '../data/products.json';

export const ProductContext = createContext();

const ProductProvider = (props) => {
    const [products, setProducts] = useState([]);
    const [displayProducts, setDisplayProducts] = useState([]);
    const [loadCount, setLoadCount] = useState(1);
    const [sort, setSort] = useState('name_asc');
    const [filter, setFilter] = useState({ color: null, price: null });

    const addToCart = (id) => {
        console.log(`Product with id ${id} added to cart`);
    };

    useEffect(() => {
        setProducts(productsData);
        setDisplayProducts(productsData.slice(0, loadCount * 20));
    }, [loadCount]);

    useEffect(() => {
        // Implement sorting and filtering logic here
        // This will depend on the specific fields in your JSON data
        // Here we're just re-displaying all products
        setDisplayProducts(products.slice(0, loadCount * 20));
    }, [sort, filter, products, loadCount]);

    return (
        <ProductContext.Provider value={{ displayProducts, loadCount, setLoadCount, sort, setSort, filter, setFilter, addToCart }}>
            {props.children}
        </ProductContext.Provider>
    );
};

export default ProductProvider;