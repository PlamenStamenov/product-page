import React, { useContext, useState } from 'react';
import { ProductContext } from '../context/ProductContext';
import '../styles/Filter.scss';

const Filter = () => {
    const { filter, setFilter } = useContext(ProductContext);
    const [isExpanded, setIsExpanded] = useState(false);

    const handleColorChange = (event) => {
        setFilter({ ...filter, color: {...filter.color, [event.target.value]: event.target.checked} });
    };

    const handlePriceChange = (event) => {
        setFilter({ ...filter, price: {...filter.price, [event.target.value]: event.target.checked} });
    };

    const toggleExpanded = () => {
        setIsExpanded(!isExpanded);
    }

    return (
        <div className="Filter">
            <h3>Filter by:</h3>
            <button className="expandButton" onClick={toggleExpanded}>Expand/Collapse Filters</button>
            <div className={`filter-section ${isExpanded ? '' : 'hide'}`}>
                <label>Color:</label>
                <div>
                    <input type="checkbox" id="Red" value="Red" onChange={handleColorChange} />
                    <label htmlFor="Red">Red</label>
                </div>
                <div>
                    <input type="checkbox" id="Green" value="Green" onChange={handleColorChange} />
                    <label htmlFor="Green">Green</label>
                </div>
                <div>
                    <input type="checkbox" id="Blue" value="Blue" onChange={handleColorChange} />
                    <label htmlFor="Blue">Blue</label>
                </div>
                <div>
                    <input type="checkbox" id="Brown" value="Brown" onChange={handleColorChange} />
                    <label htmlFor="Brown">Brown</label>
                </div>
                <div>
                    <input type="checkbox" id="Black" value="Black" onChange={handleColorChange} />
                    <label htmlFor="Black">Black</label>
                </div>
            </div>

            <div className={`filter-section ${isExpanded ? '' : 'hide'}`}>
                <label>Price:</label>
                <div>
                    <input type="checkbox" id="0-20" value="0-20" onChange={handlePriceChange} />
                    <label htmlFor="0-20">$0-$20</label>
                </div>
                <div>
                    <input type="checkbox" id="21-40" value="21-40" onChange={handlePriceChange} />
                    <label htmlFor="21-40">$21-$40</label>
                </div>
                <div>
                    <input type="checkbox" id="41-60" value="41-60" onChange={handlePriceChange} />
                    <label htmlFor="41-60">$41-$60</label>
                </div>
                <div>
                    <input type="checkbox" id="61-80" value="61-80" onChange={handlePriceChange} />
                    <label htmlFor="61-80">$61-$80</label>
                </div>
                <div>
                    <input type="checkbox" id="81-100" value="81-100" onChange={handlePriceChange} />
                    <label htmlFor="81-100">$81-$100</label>
                </div>
            </div>
        </div>
    );
}

export default Filter;
