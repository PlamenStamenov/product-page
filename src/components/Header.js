import React, { useContext, useState, useEffect } from 'react';
import { ProductContext } from '../context/ProductContext';
import '../styles/Header.scss';

function Header() {
    const { setLoadCount, setFilter, productsCount, filter, totalProducts, categories } = useContext(ProductContext);
    const [selectedCategory, setSelectedCategory] = useState(filter.category);
    const [activeCategory, setActiveCategory] = useState(categories[0]); // Initially set to first category

    useEffect(() => {
        setSelectedCategory(filter.category);
    }, [filter.category]);

    useEffect(() => {
        // Set the filter to first category on initial load
        setFilter((prevFilter) => ({
            ...prevFilter,
            category: activeCategory,
        }));
    }, []);

    const handleCategoryClick = (category) => {
        setActiveCategory(category);
        setLoadCount(8); // Reset load count to 1 when a category is clicked
        setFilter((prevFilter) => ({
            ...prevFilter,
            category,
        }));
    };

    return (
        <header className="Header">
            <div className="header-container">
                <div className="logo">Logo</div>
                <nav className="navigation">
                    <ul>
                        <li onClick={() => handleCategoryClick('')}>
                            All {activeCategory === '' && <span>{totalProducts}</span>}
                        </li>
                        {categories.map((category) => (
                            <li key={category} onClick={() => handleCategoryClick(category)}>
                                {category} {selectedCategory === category && <span>{productsCount[category] || 0}</span>}
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
