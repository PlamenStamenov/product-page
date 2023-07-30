import React from 'react';
import ProductProvider from './context/ProductContext';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductGrid from './components/ProductGrid';
import Filter from './components/Filter';
import Sort from './components/Sort';
import LoadMore from './components/LoadMore';
import '../src/styles/App.scss';

function App() {
    return (

        <div className="main">
            <ProductProvider>
                <Header />
                <div className="content">
                    <Filter />
                    <div className="products_layout">
                        <Sort />
                        <ProductGrid />
                        <LoadMore />
                    </div>
                </div>
                <Footer />
            </ProductProvider>
        </div>

    );
}

export default App;
