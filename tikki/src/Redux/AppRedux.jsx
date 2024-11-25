// App.js

import ProductList from "./Components/ProductList";
import ShoppingCart from "./Components/ShoppingCart";
import "./App.css";
import { Provider } from "react-redux"; // Import Provider
import store from "./store"; // Import store

const AppRedux = () => {
	console.log("AppRedux rendering");

	return (
		<div>
			<h1 className="app-heading">E-Commerce Application</h1>
			<Provider store={store}>
				<ProductList />
				<ShoppingCart />
			</Provider>
		</div>
	);
};

export default AppRedux;
