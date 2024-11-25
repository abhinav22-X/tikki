import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";
import AppRedux from "./Redux/AppRedux.jsx";
// import Apple from "./Apple";
// import Counter from "./Counter.jsx";
// import App_fetchdata from "./App_fetchdata.jsx";
// import RegisterationForm from "./FeedbackForm.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<AppRedux />
	</StrictMode>
);
// REMOVE StrictMode for final production and check it before doing on google.
