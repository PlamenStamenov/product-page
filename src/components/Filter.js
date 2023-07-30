import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import '../styles/Filter.scss';

const Filter = () => {
    const { filter, setFilter } = useContext(ProductContext);

    const handleColorChange = (event) => {
        setFilter({ ...filter, color: {...filter.color, [event.target.value]: event.target.checked} });
    };

    const handlePriceChange = (event) => {
        setFilter({ ...filter, price: {...filter.price, [event.target.value]: event.target.checked} });
    };

    return (
        <div className="Filter">
            <h3>Filter by:</h3>
            
            <div className="filter-section">
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

            <div className="filter-section">
                <label>Price:</label>
                <div>
                    <input type="checkbox" id="0-50" value="0-50" onChange={handlePriceChange} />
                    <label htmlFor="0-50">$0-$50</label>
                </div>
                <div>
                    <input type="checkbox" id="51-100" value="51-100" onChange={handlePriceChange} />
                    <label htmlFor="51-100">$51-$100</label>
                </div>
                <div>
                    <input type="checkbox" id="101-200" value="101-200" onChange={handlePriceChange} />
                    <label htmlFor="101-200">$101-$200</label>
                </div>
                <div>
                    <input type="checkbox" id="201-500" value="201-500" onChange={handlePriceChange} />
                    <label htmlFor="201-500">$201-$500</label>
                </div>
                <div>
                    <input type="checkbox" id="501-" value="501-" onChange={handlePriceChange} />
                    <label htmlFor="501-">Above $500</label>
                </div>
            </div>
        </div>
    );
}

export default Filter;
