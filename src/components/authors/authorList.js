"use strict";

var React = require("react");
var createReactClass = require("create-react-class");
var PropTypes = require("prop-types");

var AuthorList = createReactClass({
	propTypes: {
		authors: PropTypes.array.isRequired
	},

	render: function() {
		var createAuthorRow = function(author) {
			return (
				<tr key={author.id}>
					<td>
						<a href={"/#authors/" + author.id}>{author.id}</a>
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
