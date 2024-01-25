import React, { createContext, useEffect, useState } from "react";


export const CartContext = createContext()


const CartProvider = ({ children }) => {

    // Cart

    const [cart, setCart] = useState([])

    const [itemAmount, setItemAmount] = useState(0)
    
    const [totalAmount, setTotalAmount] = useState(0)
    
    // WishList

    const [wishList, setWishList] = useState([])
 
    const [totalItem, setTotalItem] = useState(0)


    // wishlist

    useEffect(() => {
        if (wishList) {
            const amount = wishList.reduce((accumlator, currentItem) => {
                return accumlator + currentItem.amount
            }, 0)
            setTotalItem(amount)
        }
    }, [wishList])

    // cart
    // Total Amount
    useEffect(() => {
        const totalAmount = cart.reduce((accumlator, currentItem) => {
            return accumlator + currentItem.price * currentItem.amount
        }, 0)
        setTotalAmount(totalAmount)
    }, [cart])

    // Item quantity
    useEffect(() => {
        if (cart) {
            const amount = cart.reduce((accumlator, currentItem) => {
                return accumlator + currentItem.amount
            }, 0)
            setItemAmount(amount)
        }
    }, [cart])

    // Wishlist

    //addToWishList
    const addToWishList = (product) => {
        const newItem = { ...product, amount: 1 }
        const listItem = wishList.find((item) => {
            return item.id === product.id
        })
        if (listItem) {
            const newList = [...wishList].map((item) => {
                if (item.id === product.id) {
                    return { ...item, amount: listItem.amount + 1 }
                } else {
                    return item
                }
            })
            setWishList(newList)
        } else {
            setWishList([...wishList, newItem])
        }
    }

    //removeFromWishList
    const removeFromWishList = (product) => {
        const newWishList = wishList.filter((item) => {
            return item.id !== product.id
        })
        setWishList(newWishList)
    }

    // clearwishList
    const clearwishList = ()=>{
        setWishList([])
    }

    // increment
    const increment = (product) => {
        const wishListItem = wishList.find((item) => item.id === product.id)
        addToWishList(wishListItem, product)
    }

    // decrement
    const decrement = (product) => {
        const wishListItem = wishList.find((item) => {
            return item.id === product.id
        })
        if (wishListItem) {
            const newwishList = wishList.map((item) => {
                if (item.id === product.id) {
                    return { ...item, amount: wishListItem.amount - 1 }
                } else {
                    return item
                }
            })
            setWishList(newwishList)
        }
        if (wishListItem.amount < 2) {
            removeFromWishList(product)
        }
    }


    // Cart
    // addToCart
    const addToCart = (product) => {
        const newItem = { ...product, amount: 1 }
        const cartItem = cart.find((item) => {
            return item.id === product.id
        })
        if (cartItem) {
            const newCart = [...cart].map((item) => {
                if (item.id === product.id) {
                    return { ...item, amount: cartItem.amount + 1 }
                } else {
                    return item
                }
            })
            setCart(newCart)
        } else {
            setCart([...cart, newItem])
        }
    }

    // removeFromCart
    const removeFromCart = (product) => {
        const newCart = cart.filter((item) => {
            return item.id !== product.id
        })
        setCart(newCart)
    }

    // clearCart
    const clearCart = () => {
        setCart([])
    }

    // increase amount
    const increseAmount = (product) => {
        const cartItem = cart.find((item) => item.id === product.id)
        addToCart(cartItem, product)
    }

    // decrease amount
    const decreaseAmount = (product) => {
        const cartItem = cart.find((item) => {
            return item.id === product.id
        })
        if (cartItem) {
            const newCart = cart.map((item) => {
                if (item.id === product.id) {
                    return { ...item, amount: cartItem.amount - 1 }
                } else {
                    return item
                }
            })
            setCart(newCart)
        }
        if (cartItem.amount < 2) {
            removeFromCart(product)
        }
    }

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeFromCart,
            clearCart,
            increseAmount,
            decreaseAmount,
            itemAmount,
            totalAmount,
            addToWishList,
            wishList,
            removeFromWishList,
            clearwishList,
            increment,
            decrement,
            totalItem
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider