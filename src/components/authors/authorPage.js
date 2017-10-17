"use strict";

var React = require("react");
var Link = require("react-router-dom").Link;
var createReactClass = require("create-react-class");
var AuthorStore = require("../../stores/authorStore");
var AuthorActions = require("../../actions/authorActions");
var AuthorList = require("./authorList");
var toastr = require("toastr");

var AuthorPage = createReactClass({
	getInitialState: function() {
		return {
			authors: AuthorStore.getAllAuthors()
		};
	},

	componentWillMount() {
		AuthorStore.addChangeListener(this._onChange);
	},

	componentWillUnmount() {
		AuthorStore.removeChangeListener(this._onChange);
	},

	_onChange: function() {
		this.setState({ authors: AuthorStore.getAllAuthors() });
	},

	onDelete: function(authorId, event) {
		event.preventDefault();
		AuthorActions.deleteAuthor(authorId);
		toastr.success("Author deleted!");
	},

	render: function() {
		return (
			<div>
				<h1>Authors</h1>
				<Link to="/author" className="btn btn-default">
					Add Author
				</Link>
				<AuthorList
					authors={this.state.authors}
					onDelete={this.onDelete}
				/>
			</div>
		);
	}
});

module.exports = AuthorPage;
