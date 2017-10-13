var React = require("react");
var createReactClass = require("create-react-class");
var PropTypes = require("prop-types");

var AuthorForm = createReactClass({
	propTypes: {
		author: PropTypes.object.isRequired,
		onChange: PropTypes.func.isRequired
	},

	render: function() {
		return (
			<form>
				<h1>Add Author</h1>
				<label htmlFor="firstName">First Name</label>
				<input
					type="text"
					name="firstName"
					className="form-control"
					placeholder="First Name"
					value={this.props.author.firstName}
					onChange={this.props.onChange}
				/>
				<br />
				<label htmlFor="lastName">Last Name</label>
				<input
					type="text"
					name="lastName"
					className="form-control"
					placeholder="Last Name"
					value={this.props.author.lastName}
					onChange={this.props.onChange}
				/>
				<br />
				<input type="submit" value="Save" className="btn btn-default" />
			</form>
		);
	}
});

module.exports = AuthorForm;
