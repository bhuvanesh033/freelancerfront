import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import Cartcard from "./Cartcard"; 

const Cart = () => {
    const cartItems = useSelector((state) => state.cart.items);

    const totalPrice = useMemo(() => 
        cartItems.reduce((total, item) => total + item.price * item.quantity, 0), 
        [cartItems]
    );

    const totalQuantity = useMemo(() => 
        cartItems.reduce((total, item) => total + item.quantity, 0), 
        [cartItems]
    );

    return (
        <div className="cart-container">
            <div className="left-container">
                {cartItems.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    cartItems.map((item) => (
                        <Cartcard key={item.productid} item={item} />
                    ))
                )}
            </div>
            <div className="right-container">
                <h2>Cart Summary</h2>
                <p>Total Items: {totalQuantity}</p>
                <p>Total Price: ${totalPrice.toFixed(2)}</p>
                <button>Checkout</button>
            </div>
        </div>
    );
};

export default Cart;
