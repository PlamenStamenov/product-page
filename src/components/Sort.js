import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import '../styles/Sort.scss';

const Sort = () => {
    const { setSort } = useContext(ProductContext);

    const handleSortChange = (event) => {
        setSort(event.target.value);
        // TODO: sort products based on new setSort value
        
    };

    return (
        <div className="Sort">
            <label htmlFor="sort">Sort by:</label>
            <select id="sort" onChange={handleSortChange}>
                <option value="name_asc">Name (A-Z)</option>
                <option value="name_desc">Name (Z-A)</option>
                <option value="price_asc">Price (Low to High)</option>
                <option value="price_desc">Price (High to Low)</option>
            </select>
        </div>
    );
}

export default Sort;