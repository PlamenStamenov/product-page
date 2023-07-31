import React from 'react';
import ProductProvider from './context/ProductContext';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductGrid from './components/ProductGrid';
import Filter from './components/Filter';
import Sort from './components/Sort';
import LoadMore from './components/LoadMore';
import '../src/styles/App.scss';
import BackToTopButton from './components/BackToTopButton';

function App() {
    return (

        <div className="main">
            <ProductProvider>
                <Header />

                <Filter />
                <div className="products_layout">
                    <Sort />
                    <ProductGrid />
                    <LoadMore />
                </div>

                <Footer />
            </ProductProvider>
            <BackToTopButton />
        </div>

    );
}

export default App;
