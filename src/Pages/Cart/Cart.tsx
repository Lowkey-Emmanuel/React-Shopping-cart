import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContextProvider";
import PRODUCTS from "../products";
import "./Cart.scss";

function Cart() {
	const { CartItems } = useContext(ShopContext);
	console.log(CartItems);

	return (
		<main>
			<h2>My Cart</h2>
			<section className="cart-items">
				{PRODUCTS.map((product) => {
					const itemsAmount = CartItems[product.id];
					if (CartItems[product.id] !== 0 && CartItems[product.id] > 0) {
						return (
							<article className="cart-item" id={product.id}>
								<div className="cart-item-img">
									<img src={product.productImage} alt="" />
								</div>
								<div className="cart-item__content">
									<div className="cart-item-infos">
										<p className="cart-item-description">{product.productName}</p>
										<p className="cart-item-price">{product.price}</p>
										<div className="cart-item-controls">
											<button className="cart-item-controls-btn remove">-</button>
											<span className="cart-item-controls-text quantity">x</span>
											<button className="cart-item-controls-btn add">+</button>
										</div>
									</div>
								</div>
								<div className="cart-item__right">
									<p className="cart-item-amount">{itemsAmount > 0 && <>{itemsAmount}</>}</p>
								</div>
							</article>
						);
					}
				})}
			</section>
		</main>
	);
}

export default Cart;
