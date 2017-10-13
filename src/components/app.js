"use strict";
var React = require("react");
var createReactClass = require("create-react-class");
var Header = require("./common/header");
var HomePage = require("./homePage");
var AboutPage = require("./about/aboutPage");
var AuthorPage = require("./authors/authorPage");
var AddAuthorPage = require("./authors/addAuthorPage");
var Route = require("react-router-dom").Route;
var Redirect = require("react-router-dom").Redirect;

var App = createReactClass({
	render: function() {
		var proceedOrGoBack = function(destPage, props) {
			if (confirm("Are you sure to go?")) {
				return destPage;
			} else if (props.history.length > 0) {
				props.history.goBack();
				return null;
			} else {
				<Redirect to="/" />;
			}
		};

		var proceedOrGobackAboutPage = function(props) {
			return proceedOrGoBack(<AboutPage />, props);
		};

		return (
			<div>
				<Header />
				<div className="container-fluid">
					<Route exact path="/" component={HomePage} />
					<Route path="/authors" component={AuthorPage} />
					<Route path="/add-author" component={AddAuthorPage} />
					<Route
						path="/about"
						render={proceedOrGobackAboutPage.bind(this)}
					/>
				</div>
			</div>
		);
	}
});

module.exports = App;
