"use strict";

var React = require("react");
var Link = require("react-router-dom").Link;
var createReactClass = require("create-react-class");
var AuthorStore = require('../../stores/authorStore');
var AuthorList = require("./authorList");

var AuthorPage = createReactClass({
	getInitialState: function() {
		return {
			authors: AuthorStore.getAllAuthors()
		};
	},
	
	render: function() {
		return (
			<div>
				<h1>Authors</h1>
				<Link to="/author" className="btn btn-default">
					Add Author
				</Link>
				<AuthorList authors={this.state.authors} />
			</div>
		);
	}
});

module.exports = AuthorPage;
