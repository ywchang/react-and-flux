"use strict";
var React = require("react");
var createReactClass = require("create-react-class");
var Header = require("./common/header");
var HomePage = require("./homePage");
var AboutPage = require("./about/aboutPage");
var AuthorPage = require("./authors/authorPage");
var Route = require("react-router-dom").Route;
var Redirect = require("react-router-dom").Redirect;

var App = createReactClass({
	render: function() {
		return (
			<div>
				<Header />
				<div className="container-fluid">
					<Route exact path="/" component={HomePage} />
					<Route path="/authors" component={AuthorPage} />
					<Route
						path="/about"
						render={function(props) {
							if (confirm("Are you sure to go to about?")) {
								return <AboutPage />;
							} else if (props.history.length > 0) {
								props.history.goBack();
								return null;
							} else {
								<Redirect to="/" />;
							}
						}}
					/>
				</div>
			</div>
		);
	}
});

module.exports = App;
