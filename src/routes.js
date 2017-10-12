"use strict";

var React = require("react");
var ReactRouter = require("react-router");
var DefaultRoute = ReactRouter.DefaultRoute;
var Route = ReactRouter.Route;

var routes = (
	<Route path="/" component={require("./components/app")}>
		<DefaultRoute component={require("./components/homePage")} />
		<Route
			path="authors"
			component={require("./components/authors/authorPage")}
		/>
		<Route
			path="about"
			component={require("./components/about/aboutPage")}
		/>
	</Route>
);

module.exports = routes;
