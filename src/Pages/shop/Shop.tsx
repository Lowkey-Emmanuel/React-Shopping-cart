import PRODUCTS from "../products";
import { ShopContext } from "../../Context/ShopContextProvider";
import "./Shop.scss";
import { useContext } from "react";

function Shop() {
	const { addToCart, CartItems } = useContext(ShopContext);

	return (
		<main>
			<h1 className="main-title">Lowkey's E-Shop</h1>
			<section className="products-section">
				{PRODUCTS.map((product) => {
						const itemsAmount = CartItems[product.id]
					return (
						<article className="product" id={product.id}>
							<div className="product-img__box">
								<img src={product.productImage} alt="" />
							</div>
							<p className="product-description">{product.productName}</p>
							<p className="product-price">{product.price}</p>
							<button className="product-addbtn" onClick={() => addToCart(product.id)}>
								Add to cart
							</button>
						</article>
					);
				})}
			</section>
		</main>
	);
}

export default Shop;
