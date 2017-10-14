var React = require("react");
var createReactClass = require("create-react-class");
var AuthorForm = require("./authorForm");
var AuthorApi = require("../../api/authorApi");
var PropTypes = require("prop-types");

var AddAuthorPage = createReactClass({
	propTypes: {
		history: PropTypes.object.isRequired
	},

	getInitialState: function() {
		return {
			author: {
				id: "",
				firstName: "",
				lastName: ""
			}
		};
	},

	setAuthorState: function(event) {
		var field = event.target.name;
		var value = event.target.value;
		this.setState(function(prevState) {
			prevState.author[field] = value;
			return prevState;
		});
	},

	saveAuthor: function(event) {
		event.preventDefault();
		AuthorApi.saveAuthor(this.state.author);
		this.props.history.push("/authors");
	},

	render: function() {
		return (
			<AuthorForm
				author={this.state.author}
				onChange={this.setAuthorState}
				onSave={this.saveAuthor}
			/>
		);
	}
});

module.exports = AddAuthorPage;
