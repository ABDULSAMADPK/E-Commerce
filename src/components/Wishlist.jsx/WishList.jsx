import React, { useContext } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

function WishList() {
    const { wishList, totalItem, addToCart, removeFromWishList, clearwishList, increment, decrement } = useContext(CartContext)

    if (totalItem === 0) {
        return (
            <div class="container mb-5" style={{ marginTop: "150px" }}>
                <div class="row">
                    <div class="col text-center">
                        <img width="500px"
                            src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/mywishlist-empty_39f7a5.png"
                            alt="empty wishlist" />
                        <h3 class="mt-2">Empty Wishlist</h3>
                        <p>You have no items in your wishlist. Start adding!</p>
                        <Link to={'/'}>
                            <button class="btn btn-success">Shop more</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <>


            {/* <!-- wishlist design --> */}

            <section className="h-100 h-custom mb-5" style={{ backgroundColor: "#d2c9ff", marginTop: "100px" }}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12">
                            <div className="card card-registration card-registration-2" style={{ borderRadius: "15px" }}>
                                <div className="card-body p-0">
                                    <div className="row g-0">
                                        <div className="col-lg-12">
                                            <div className="p-5">
                                                <div className="d-flex justify-content-between align-items-center mb-5">
                                                    <h1 className="fw-bold mb-0 text-black">My Wishlist</h1>
                                                    <h6 class="mb-0 text-muted">{totalItem} items</h6>
                                                </div>
                                                <hr className="my-4" />
                                                {wishList.map((item) =>
                                                    <div className="row mb-4 d-flex justify-content-between align-items-center">
                                                            <div className="col-md-2 col-lg-2 col-xl-1 mt-2 ms-2">
                                                                <Link to={`/product/${item.id}`}>
                                                                <img src={item.image} style={{ width: '100px' }}
                                                                    className="rounded-3 w-100" alt="..." />
                                                                    </Link>
                                                            </div>
                                                        <div className="col-md-3 col-lg-3 col-xl-2 mt-2">
                                                            <h5 className="text-black mb-0">{item.category}</h5>
                                                        </div>
                                                        <div className="col-md-3 col-lg-3 col-xl-3 d-flex mt-3">
                                                            <button onClick={() => {decrement(item)}} className="btn btn-link px-2"><FaMinus />
                                                            </button>
                                                            <input id="form1" name="quantity" value={item.amount}
                                                                className="form-control form-control-sm" />
                                                            <button onClick={() => {increment(item)}} className="btn btn-link px-2"><FaPlus />
                                                            </button>
                                                        </div>
                                                        <div className="col-md-3 col-lg-2 col-xl-1 mt-3 offset-lg-2">
                                                            <h6 className="mb-0">${parseFloat(item.price * item.amount).toFixed(2)}</h6>
                                                        </div>
                                                        <div className="col-xl-3 mt-3 text-end">
                                                            <Link to={'/cart'} >
                                                                <i className="fa-solid fa-cart-plus" style={{ fontSize: '25px' }} onClick={() => addToCart(item)}></i>
                                                            </Link>
                                                            <Link>
                                                                <i className="fas fa-times mx-4 text-dark" style={{ fontSize: '25px' }} onClick={() => removeFromWishList(item)}></i>
                                                            </Link>
                                                        </div>
                                                        <hr className="my-4" />
                                                    </div>
                                                )}
                                                <button className='btn btn-danger my-3' onClick={clearwishList}>
                                                    clear
                                                </button>
                                                <div className="pt-3">
                                                    <Link to={'/'} style={{ textDecoration: 'none', color: 'black' }}>
                                                        <p className="text-bold btn">
                                                            <i className="fas fa-long-arrow-alt-left mx-2"></i>Back to shop</p>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default WishList