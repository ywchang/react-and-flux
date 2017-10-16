$ = jQuery = require("jquery");
var React = require("react");
var ReactDOM = require("react-dom");
var BrowserRouter = require("react-router-dom").BrowserRouter;
var Route = require("react-router-dom").Route;
var Switch = require("react-router-dom").Switch;
var Redirect = require("react-router-dom").Redirect;
var App = require("./components/app");
var NotFoundPage = require("./components/notFoundPage");
var InitializeActions = require("./actions/initializeActions");

InitializeActions.initialize();

ReactDOM.render(
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={App} />
			<Route path="/authors" component={App} />
			<Route path="/about" component={App} />
			<Route path="/author" component={App} />
			<Redirect from="/about-us" to="/about" />
			<Route component={NotFoundPage} />
		</Switch>
	</BrowserRouter>,
	document.getElementById("app")
);
