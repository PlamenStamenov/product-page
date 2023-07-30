import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import '../styles/LoadMore.scss';

const LoadMore = () => {
    const { loadCount, setLoadCount } = useContext(ProductContext);

    const handleLoadMoreClick = () => {
        setLoadCount(loadCount + 1);
    };

    return (
        <div className="LoadMore">
            <button onClick={handleLoadMoreClick}>Load More</button>
        </div>
    );
}

export default LoadMore;