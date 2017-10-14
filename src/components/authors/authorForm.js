var React = require("react");
var createReactClass = require("create-react-class");
var PropTypes = require("prop-types");
var Input = require("../common/textInput");

var AuthorForm = createReactClass({
	propTypes: {
		author: PropTypes.object.isRequired,
		onChange: PropTypes.func.isRequired,
		onSave: PropTypes.func.isRequired
	},

	render: function() {
		return (
			<form>
				<h1>Add Author</h1>
				<Input
					name="firstName"
					placeholder="First Name"
					value={this.props.author.firstName}
					onChange={this.props.onChange}
					label="First Name"
				/>
				<Input
					name="lastName"
					placeholder="Last Name"
					value={this.props.author.lastName}
					onChange={this.props.onChange}
					label="Last Name"
				/>
				<input
					type="submit"
					value="Save"
					className="btn btn-default"
					onClick={this.props.onSave}
				/>
			</form>
		);
	}
});

module.exports = AuthorForm;
