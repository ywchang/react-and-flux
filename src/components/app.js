"use strict";
var React = require("react");
var createReactClass = require("create-react-class");
var Header = require("./common/header");
var HomePage = require("./homePage");
var AboutPage = require("./about/aboutPage");
var AuthorPage = require("./authors/authorPage");
var Route = require("react-router-dom").Route;

var App = createReactClass({
	render: function() {
		return (
			<div>
				<Header />
				<div className="container-fluid">
					<Route exact path="/" component={HomePage} />
					<Route path="/authors" component={AuthorPage} />
					<Route path="/about" component={AboutPage} />
				</div>
			</div>
		);
	}
});

module.exports = App;
