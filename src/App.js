import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import WishList from './components/Wishlist.jsx/WishList';
import ViewProduct from './components/View-Product/ViewProduct';
import Cart from './components/Cart/Cart'
import PageNotFound from './components/Page-not-found/PageNotFound'
import { ProductContext } from './ProductContext';
import useFetch from './hooks/useFetch';
import CartProvider from './components/context/CartContext';

function App() {

  const apiUrl = 'https://fakestoreapi.com/products'
  const [products, isLoading] = useFetch(apiUrl)
  
  return (
    <div className="App">
      <Router>
        <Navbar />
        <ProductContext.Provider value={{ products, isLoading }}>
          <CartProvider>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/product/:productId' element={<ViewProduct />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/wishlist' element={<WishList />} />
              <Route path='*' element={<PageNotFound />} />
            </Routes>
            </CartProvider>
        </ProductContext.Provider>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
