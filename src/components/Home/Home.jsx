import React, { useContext } from 'react'
import './Home.css'
import { ProductContext } from '../../ProductContext'
import { Link } from 'react-router-dom';
import { Hourglass } from 'react-loader-spinner';
import { CartContext } from '../context/CartContext';
import { FaEye } from "react-icons/fa";

function Home() {
  const { products, isLoading } = useContext(ProductContext)
  const {addToCart,addToWishList} = useContext(CartContext)
  return (
    <div className=''>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://hips.hearstapps.com/hmg-prod/images/amazon-tech-gifts-6413c79ed45d2.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://www.zeeyajewellery.co.in/cdn/shop/files/Screenshot_2023-11-10_at_12.03.35_PM.png?v=1699598057&width=3840" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://ulwyo-com.myshopify.com/cdn/shop/files/fffff_1280x.png?v=1582523940" className="d-block w-100" alt="..." />
          </div>
        </div>
      </div>
      <div className="container-fluid mt-5">
        <div className="text-center">
          <h1 className="display-4 text-danger mt-2">Latest Products</h1>
        </div>
        <div className='card-item d-flex border-5 p-3 rounded'>
          {isLoading ? <Hourglass
            visible={true}
            height="80"
            width="80"
            ariaLabel="hourglass-loading"
            wrapperStyle={{}}
            wrapperClass=""
            colors={['#306cce', '#72a1ed']}
          /> : products.map((product) =>
            <div className='card-body1'>
              <div className='img mt-3 mx-auto'>
                <img src={product.image} alt="" />
              </div>
              <div className='list-item'>
                <p>Title :{product.title.slice(0, 15)}... </p>
                <p>Price : $ {product.price} </p>
                <p>Catagory : {product.category} </p>
                <div className='d-flex'>
                  <Link to={`/product/${product.id}`}>
                    <i className='btn btn-info my-3'><FaEye/> </i>
                  </Link>
                  <div className='icon my-3 m-4'>
                    <Link to={'/wishlist'}>
                      <i className="fa-regular text-muted fa-heart mx-3" onClick={()=>addToWishList(product)} style={{ fontSize: '25px' }}></i>
                      </Link>
                      <Link to={'/cart'}>
                      <i className="fa-solid fa-cart-plus" onClick={()=>addToCart(product)} style={{ fontSize: '25px' }}></i>
                      </Link>

                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

    </div>
  )
}

export default Home