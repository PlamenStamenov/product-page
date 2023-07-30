import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';
import '../styles/Rating.scss';

const Rating = ({ value }) => {
    return (
        <div className="rating">
            {[1, 2, 3, 4, 5].map((i) => {
                return (
                    <span key={i}>
                        {value >= i ? (
                            <FontAwesomeIcon className="star filled-star" icon={solidStar} />
                        ) : (
                            <FontAwesomeIcon className="star unfilled-star" icon={regularStar} />
                        )}
                    </span>
                );
            })}
        </div>
    );
};

export default Rating;
