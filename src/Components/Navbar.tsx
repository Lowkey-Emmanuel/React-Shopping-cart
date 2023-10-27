import { Link } from "react-router-dom";
import "./Navbar.scss";
import { BsCart4 as Cart_icon } from "react-icons/bs";
import { BsCart2 as Shop_logo } from "react-icons/bs";

function Navbar() {
	return (
		<nav className="navbar">
			<div className="navbar_logo">
				<Link to="/">
					<Shop_logo />
				</Link>
			</div>
			<div className="navbar-links">
				<Link to="/shop" className="navbar-link">
					Shop
				</Link>
				<Link to="/cart " className="navbar-link">
					<Cart_icon />
				</Link>
			</div>
		</nav>
	);
}

export default Navbar;
