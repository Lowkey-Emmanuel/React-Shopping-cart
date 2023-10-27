import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Shop from "./Pages/shop/Shop";
import Cart from "./Pages/Cart/Cart";
import Navbar from "./Components/Navbar";
import { ShopContextProvider } from "./Context/ShopContextProvider";

function App() {
	return (
		<ShopContextProvider>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/shop" element={<Shop />}></Route>
				<Route path="/cart" element={<Cart />}></Route>
			</Routes>
		</ShopContextProvider>
	);
}

export default App;
