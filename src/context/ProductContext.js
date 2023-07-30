// ProductContext.js
import React, { useState, useEffect, createContext } from 'react';
import productsData from '../data/products.json';

export const ProductContext = createContext();

const ProductProvider = (props) => {
    const [products, setProducts] = useState([]);
    const [displayProducts, setDisplayProducts] = useState([]);
    const [loadCount, setLoadCount] = useState(8);
    const [sort, setSort] = useState('name_asc');
    const [productsCount, setProductsCount] = useState({});

    // Get the unique categories
    const categories = Array.from(new Set(productsData.map(product => product.category)));

    // Get the total number of products and the number of products displayed
    const totalProducts = products.length;
    const displayedProducts = displayProducts.length;

    // Initialize the filter state
    const [filter, setFilter] = useState({ 
        color: {
            Red: false,
            Green: false,
            Blue: false,
            Yellow: false,
            Pink: false,
            Orange: false,
        },
        price: {
            '0-50': false,
            '51-100': false,
            '101-200': false,
            '201-500': false,
            '501+': false,
        },
        category: categories[0] 
    });

    const addToCart = (id) => {
        console.log(`Product with id ${id} added to cart`);
    };

    useEffect(() => {
        let productsCount = {};
        categories.forEach(category => {
            productsCount[category] = productsData.filter(product => product.category === category).length;
        });
        setProductsCount(productsCount);
    }, [products]);

    useEffect(() => {
        setProducts(productsData);
        // Now displayProducts will only contain products from the first category at first
        setDisplayProducts(productsData ? productsData.filter(product => product.category === filter.category).slice(0, loadCount * 8) : []);
    }, [loadCount]);

    useEffect(() => {
        // Implement sorting and filtering logic here
        let filteredProducts = products;

        // Color filtering
        const isColorFiltered = Object.values(filter.color).some(value => value);
        if (isColorFiltered) {
            filteredProducts = filteredProducts.filter(
                (product) => filter.color[product.color]
            );
        }

        // Price filtering
        const isPriceFiltered = Object.values(filter.price).some(value => value);
        if (isPriceFiltered) {
            filteredProducts = filteredProducts.filter((product) => {
                const productPrice = Number(product.price); // assuming price is a string in your data
                for (const priceRange in filter.price) {
                    if (filter.price[priceRange]) {
                        const [min, max] = priceRange.split('-').map(Number);
                        if (productPrice >= min && (!max || productPrice <= max)) {
                            return true;
                        }
                    }
                }
                return false;
            });
        }

        // Category filtering
        if (filter.category) {
            filteredProducts = filteredProducts.filter(
                (product) => product.category === filter.category
            );
        }

        // Sorting logic based on sort state
        switch (sort) {
            case 'name_asc':
                filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'name_desc':
                filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
                break;
            case 'price_asc':
                filteredProducts.sort((a, b) => a.price - b.price);
                break;
            case 'price_desc':
                filteredProducts.sort((a, b) => b.price - a.price);
                break;
            default:
                break;
        }

        setDisplayProducts(filteredProducts.slice(0, loadCount));
    }, [sort, filter, products, loadCount]);

    return (
        <ProductContext.Provider value={{
            displayedProducts,
            totalProducts,
            displayProducts,
            loadCount,
            setLoadCount,
            sort,
            setSort,
            filter,
            setFilter,
            productsCount,
            addToCart
        }}>
            {props.children}
        </ProductContext.Provider>
    );
};

export default ProductProvider;
