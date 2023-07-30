//Header.js
import React from 'react';
import '../styles/Header.scss';

function Header() {
    return (
        <header className="Header">
            <div className="logo">Logo</div>
            <nav className="navigation">
                <ul>
                    <li>Category 1</li>
                    <li>Category 2</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;