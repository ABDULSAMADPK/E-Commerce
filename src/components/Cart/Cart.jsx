import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import { FaMinus, FaPlus } from "react-icons/fa6";

function Cart() {
    const { cart, removeFromCart, clearCart, increseAmount, decreaseAmount, itemAmount, totalAmount } = useContext(CartContext)
    if (itemAmount === 0) {
        return (
            <div className="container" style={{ marginTop: "150px" }}>
                <div className="row">
                    <div className="col text-center">
                        <img style={{ width: "500px" }}
                            src="https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"
                            alt="empty cart" />
                        <h3>Your cart is empty!</h3>
                        <Link to={'/'}>
                            <button className="btn btn-success my-3" >Shop more</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
    return (
        // <!-- empty cart -->
        <>
            {/* <!-- Cart design --> */}
            <section className="h-100 h-custom mb-5" style={{ backgroundColor: "#d2c9ff" }}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12">
                            <div className="card card-registration card-registration-2" style={{ borderRadius: "15px;" }}>
                                <div className="card-body p-0">
                                    <div className="row g-0">
                                        <div className="col-lg-8">
                                            <div className="p-5">
                                                <div className="d-flex justify-content-between align-items-center mb-5">
                                                    <h1 className="fw-bold mb-0 text-black">Shopping Cart</h1>
                                                    <h6 className="mb-0 text-muted">{itemAmount} items</h6>
                                                </div>
                                                <hr className="my-4" />
                                                {cart.map((item) =>

                                                    <div class="row mb-4 d-flex justify-content-between align-items-center mb-2">
                                                        <div className="col-md-2 col-lg-2 col-xl-2">
                                                            <Link to={`/product/${item.id}`}>
                                                                <img src={item.image}
                                                                    className="img-fluid rounded-3" alt="Cotton T-shirt" />
                                                            </Link>
                                                        </div>
                                                        <div className="col-md-3 col-lg-3 col-xl-3">
                                                        <Link to={`/product/${item.id}`}>
                                                            <h6 className="text-muted">{item.title}</h6>
                                                            <h6 class="text-dark mb-2">{item.category}</h6>
                                                            </Link>
                                                        </div>
                                                        <div className="col-md-3 col-lg-3 col-xl-3 d-flex ">
                                                            <button onClick={() => decreaseAmount(item)} className="btn btn-link px-2"><FaMinus />
                                                            </button>
                                                            <input id="form1" name="quantity" value={item.amount}
                                                                className="form-control form-control-sm" />
                                                            <button onClick={() => increseAmount(item)} className="btn btn-link px-2"><FaPlus />
                                                            </button>
                                                        </div>
                                                        <div className="col-md-5 d-flex col-lg-2 col-xl-3 offset-lg-1">
                                                            <h6 className="mb-0 mt-3">${`${parseFloat(item.price * item.amount).toFixed(2)}`}</h6>
                                                            <div className="col-md-1 col-lg-1 col-xl-1 m-3 text-end">
                                                                <a href="#!" className="text-muted" onClick={() => removeFromCart(item)}><i className="fas fa-times"></i></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                                <hr className="my-4" />
                                                <div className="pt-3">
                                                    <Link to={'/'} style={{ textDecoration: 'none', color: 'black' }}>
                                                        <p className="text-bold btn">
                                                            <i className="fas fa-long-arrow-alt-left mx-2"></i>Back to shop</p>
                                                    </Link>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-lg-4 bg-grey">

                                            <div className="p-5">
                                                <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                                                <hr className="my-4" />

                                                <div className="d-flex justify-content-between mb-4">
                                                    <h5 className="text-uppercase">items {itemAmount}</h5>
                                                    <h5>$ {parseFloat(totalAmount).toFixed(2)}</h5>
                                                </div>

                                                <h4>Grant Total: <span className="text-danger fw-bolder">{parseFloat(totalAmount).toFixed(2)}</span></h4>
                                                <hr />
                                                <button className='btn btn-danger my-3' onClick={clearCart}>
                                                    clear
                                                </button>


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

export default Cart