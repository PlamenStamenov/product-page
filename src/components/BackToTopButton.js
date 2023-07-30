import React, { useState, useEffect } from "react";
import '../styles/BackToTopButton.scss';
import { FaArrowCircleUp } from 'react-icons/fa';

const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled up to given distance
    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Set the top cordinate to 0
    // make scrolling smooth
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <div className={`back-to-top ${isVisible ? "show" : ""}`}>
                <div onClick={scrollToTop}>
                    <FaArrowCircleUp />
                </div>
        </div>
    );
}

export default BackToTopButton;
