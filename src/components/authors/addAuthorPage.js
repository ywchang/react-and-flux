var React = require("react");
var createReactClass = require("create-react-class");
var AuthorForm = require("./authorForm");

var AddAuthorPage = createReactClass({
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

	render: function() {
		return (
			<AuthorForm
				author={this.state.author}
				onChange={this.setAuthorState}
			/>
		);
	}
});

module.exports = AddAuthorPage;
