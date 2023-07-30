import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import '../styles/LoadMore.scss';

const LoadMore = () => {
    const { loadCount, setLoadCount, displayedProducts, totalFilteredProducts } = useContext(ProductContext);

    const handleLoadMoreClick = () => {
        setLoadCount(loadCount + 9);
    };

    console.log("Displayed products: ", displayedProducts);
    console.log("Total filtered products: ", totalFilteredProducts);

    return (
        <div className="LoadMore">
            {displayedProducts < totalFilteredProducts && (
                <button onClick={handleLoadMoreClick}>Load More</button>
            )}
        </div>
    );
}

export default LoadMore;