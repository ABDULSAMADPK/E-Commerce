import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { ProductContext } from '../../ProductContext'
import { Hourglass } from 'react-loader-spinner'
import { CartContext } from '../context/CartContext'

function ViewProduct() {
    const [singleProduct, setSingleProduct] = useState()
    const { isLoading } = useContext(ProductContext)
    const apiUrl = 'https://fakestoreapi.com/products'
    const { productId } = useParams()
    const { addToCart, addToWishList } = useContext(CartContext)


    useEffect(() => {
        axios.get(`${apiUrl}/${productId}`)
            .then(response => { setSingleProduct(response.data) })
            .catch(error => console.log('Error', error))
    }, [productId])

    if (isLoading) {
        return <div className='container text-center p-5'> <Hourglass
            visible={true}
            height="80"
            width="80"
            ariaLabel="hourglass-loading"
            wrapperStyle={{}}
            wrapperClass=""
            colors={['#306cce', '#72a1ed']}
        />
        </div>
    }  else if (!singleProduct) {
        return (<div className="container mt-5 d-flex justify-content-center mb-4">
            <div className="row">
                <div className="col text-center ">
                    <img className='w-100' src="https://www.raystronics.com/public/img/no-product-found.jpg" alt="Page Not Found" />
                    <Link to={'/'}>
                        <button class="btn btn-success mt-3">Shop more</button>
                    </Link>
                </div>
            </div>
        </div>
        )
    }


    return (
        <section className="py-5 mt-4">
            {singleProduct ?
                <div className="container px-4 px-lg-5 my-5">
                    <div className="row gx-4 gx-lg-5 align-items-center">
                        <div className="col-md-6"><img class="card-img-top mb-5 mb-md-0 w-100" src={singleProduct.image} alt="..." />
                            <div className="d-flex mt-5 mb-3">
                                <Link to={'/wishlist'}>
                                    <button className="btn btn-outline-danger flex-shrink-0 mx-2" type="button" onClick={() => addToWishList(singleProduct)}>
                                        <i className="fa-solid fa-heart"></i>
                                        Add to wishlist
                                    </button>
                                </Link>
                                <Link to={'/cart'}>
                                    <button className="btn btn-outline-success flex-shrink-0" type="button" onClick={() => { addToCart(singleProduct) }}>
                                        <i className="fa-solid fa-cart-plus"></i>
                                        Add to cart
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-6 ms-2">
                            <div className="mb-3"><b>ID: {singleProduct.id}</b></div>
                            <h3 className="display fw-bolder"><span className='text-primary'>Title</span>: {singleProduct.title}</h3>
                            <div className="price fw-bolder text-danger mb-3 mt-3">
                                <span>$ {singleProduct.price}</span>
                            </div>
                            <p className="fw-bolder fs-5"><span className='text-info'>Product Features</span>: {singleProduct.description}<br /></p>
                            <p className="text-success">Rating: {singleProduct.rating.rate} </p>
                        </div>
                    </div>
                </div> : <div className='container text-center p-5'> <Hourglass
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="hourglass-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    colors={['#306cce', '#72a1ed']}
                />
                </div>}
        </section>
    )
}

export default ViewProduct