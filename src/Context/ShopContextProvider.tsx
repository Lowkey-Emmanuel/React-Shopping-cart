import { createContext, useState } from "react";
import PRODUCTS from "../Pages/products";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
	let cart = {};

	for (let i = 0; i < PRODUCTS.length; i++) {
		cart[i] = 0;
	}
	return cart;
};

export const ShopContextProvider = (props) => {
	const [CartItems, setCartItems] = useState(getDefaultCart());

	const addToCart = (itemId) => {
		setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
	};
	const removeFromCart = (itemId) => {
		setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
	};

	const contextValue = { CartItems, addToCart, removeFromCart };

	console.log(CartItems);

	return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>;
};
