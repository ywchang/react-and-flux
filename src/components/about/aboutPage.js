"use strict";

var React = require("react");
var createReactClass = require("create-react-class");

var About = createReactClass({
	render: function() {
		return (
			<div>
				<h1>About</h1>
				<div>
					<p>This Application uses the following technologies:</p>
					<ul>
						<li>React</li>
						<li>React Router</li>
						<li>Flux</li>
						<li>Node</li>
						<li>Gulp</li>
						<li>Browserify</li>
						<li>Bootstrap</li>
					</ul>
				</div>
			</div>
		);
	}
});

module.exports = About;
