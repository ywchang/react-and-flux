var React = require("react");
var createReactClass = require("create-react-class");
var AuthorForm = require("./authorForm");
var AuthorApi = require("../../api/authorApi");
var PropTypes = require("prop-types");
var toastr = require("toastr");

var ManageAuthorPage = createReactClass({
	propTypes: {
		history: PropTypes.object.isRequired,
		match: PropTypes.object.isRequired
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

	componentWillMount: function() {
		if (this.props.match.params.authorId) {
			var author = AuthorApi.getAuthorById(
				this.props.match.params.authorId
			);
			if (author.firstName && author.lastName) {
				this.setState({
					author: {
						id: author.id,
						firstName: author.firstName,
						lastName: author.lastName
					}
				});
			}
		}
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
		this.setState({ author: {} }, function() {
			toastr.success("Author saved!");
			this.props.history.push("/authors");
		});
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

module.exports = ManageAuthorPage;
