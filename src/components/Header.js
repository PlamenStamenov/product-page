import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import '../styles/Header.scss';

function Header() {
    const { setFilter } = useContext(ProductContext);

    const categories = ['Bags', 'Shoes', 'Accessories'];

    const handleCategoryClick = (category) => {
        setFilter((prevFilter) => ({
            ...prevFilter,
            category,
        }));
    };

    return (
        <header className="Header">
            <div className="logo">Logo</div>
            <nav className="navigation">
                <ul>
                    <li onClick={() => handleCategoryClick('')}>All</li>
                    {categories.map((category) => (
                        <li key={category} onClick={() => handleCategoryClick(category)}>
                            {category}
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Header;
