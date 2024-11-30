import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
// import Tikk from "./Tick/Tikk";
import store from "./Practise/store.jsx";
import App from "./Practise/App.jsx";
import { Provider } from "react-redux";
// import Code_notification from "./Code_samples/Code_notification.jsx";
// import AppRedux from "./Redux/AppRedux.jsx";
// import Apple from "./Apple";
// import Counter from "./Counter.jsx";
// import App_fetchdata from "./App_fetchdata.jsx";
// import RegisterationForm from "./FeedbackForm.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</StrictMode>
);
// REMOVE StrictMode for final production and check it before doing on google.
