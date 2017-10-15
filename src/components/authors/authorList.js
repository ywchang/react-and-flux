"use strict";

var React = require("react");
var createReactClass = require("create-react-class");
var PropTypes = require("prop-types");
var Link = require('react-router-dom').Link;

var AuthorList = createReactClass({
	propTypes: {
		authors: PropTypes.array.isRequired
	},

	render: function() {
		var createAuthorRow = function(author) {
			return (
				<tr key={author.id}>
					<td>
						<Link to={"/author/" + author.id}>{author.id}</Link>
					</td>
					<td>
						{author.firstName} {author.lastName}
					</td>
				</tr>
			);
		};

		return (
			<div>
				<table className="table">
					<tbody>
						<tr>
							<th>ID</th>
							<th>Name</th>
						</tr>
						{this.props.authors.map(createAuthorRow, this)}
					</tbody>
				</table>
			</div>
		);
	}
});

module.exports = AuthorList;
