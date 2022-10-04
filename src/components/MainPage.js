import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./MainPage.css";
import axios from "axios";

const MainPage = () => {
	let [products, setProducts] = React.useState([]);
	useEffect(() => {
		axios
			.get("https://89e06b7a-d7f6-4161-97d5-99bd1e2387e3.mock.pstmn.io/products")
			.then((res) => {
				products = res.data.products;
				console.log(products);
				setProducts(products);
			})
			.catch((err) => {
				return console.log(err);
			});
	}, []);

	return (
		<>
			<div id="body">
				<div id="banner">
					<img src="images/banners/banner1.png" alt="" />
				</div>
				<h2>Products</h2>
				<div id="product-list">
					{products.map((product, idx) => {
						return (
							<div className="product-card" key={idx}>
								<Link className="product-link" to={`/product/${product.id}`}>
									<div>
										<img className="product-img" src={product.imageUrl} alt={product.name} />
									</div>
									<div className="product-content">
										<span className="product-name">{product.name}</span>
										<span className="product-price">{product.price}원</span>
										<div className="product-seller">
											<img className="product-avatar" src="images/icons/avatar.png" alt="" />
											<span>내추럴코어</span>
										</div>
									</div>
								</Link>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};
export default MainPage;
