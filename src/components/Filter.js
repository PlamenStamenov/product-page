import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import '../styles/Filter.scss';

const Filter = () => {
    const { filter, setFilter } = useContext(ProductContext);

    const handleColorChange = (event) => {
        setFilter({ ...filter, color: event.target.value });
    };

    const handlePriceChange = (event) => {
        setFilter({ ...filter, price: event.target.value });
    };

    return (
        <div className="Filter">
            <h3>Filter by:</h3>
            
            <div className="filter-section">
                <label htmlFor="color">Color:</label>
                <input type="text" id="color" value={filter.color || ''} onChange={handleColorChange} />
            </div>

            <div className="filter-section">
                <label htmlFor="price">Max Price:</label>
                <input type="number" id="price" value={filter.price || ''} onChange={handlePriceChange} min="0" />
            </div>
        </div>
    );
}

export default Filter;
