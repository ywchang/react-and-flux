var React = require("react");
var createReactClass = require("create-react-class");
var AuthorForm = require("./authorForm");
var AuthorApi = require("../../api/authorApi");
var PropTypes = require("prop-types");
var toastr = require("toastr");

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
			},
			errors: {}
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

	isAuthorValid: function() {
		var isValid = true;
		this.setState({ errors: {} });
		if (this.state.author.firstName.length < 3) {
			this.setState(function(prevState) {
				prevState.errors.firstName =
					"First Name should not be less than 3 characters!";
				return prevState;
			});
			isValid = false;
		}
		if (this.state.author.lastName.length < 3) {
			this.setState(function(prevState) {
				prevState.errors.lastName =
					"Last Name should not be less than 3 characters!";
				return prevState;
			});
			isValid = false;
		}
		return isValid;
	},

	saveAuthor: function(event) {
		event.preventDefault();
		if (!this.isAuthorValid()) {
			return;
		}
		AuthorApi.saveAuthor(this.state.author);
		toastr.success("Author saved!");
		this.props.history.push("/authors");
	},

	hasUnsavedData: function() {
		return !!this.state.author.firstName || !!this.state.author.lastName;
	},

	render: function() {
		return (
			<AuthorForm
				author={this.state.author}
				onChange={this.setAuthorState}
				onSave={this.saveAuthor}
				errors={this.state.errors}
				hasUnsavedData={this.hasUnsavedData()}
			/>
		);
	}
});

module.exports = AddAuthorPage;
