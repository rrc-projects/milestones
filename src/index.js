import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<Switch>
				<Route path="/" component={App} />
				<Route path="/:country" component={App} />
			</Switch>
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
);

reportWebVitals();
