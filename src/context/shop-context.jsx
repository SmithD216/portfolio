import React, { createContext, useState } from "react";
import { PRODUCTS } from "../products";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i < PRODUCTS.length + 1; i++) {
        cart[i] = 0;
    }
    return cart;
};

const ShopContextProvider = (props) => {
    const [cartItems, seetCartItems] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        seetCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    };
    const removeFromCart = (itemId) => {
        seetCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    };
    return (
        <ShopContext.Provider>
            <div>{props.children}</div>
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
