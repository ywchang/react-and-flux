"use strict";

var Dispatcher = require("../dispatcher/appDispatcher");
var AuthorApi = require("../api/authorApi");
var ActionTypes = require("../constants/actionTypes");

var InitializeActions = {
	initialize: function() {
		Dispatcher.dispatch({
			actionType: ActionTypes.INITIALIZE,
			data: {
				authors: AuthorApi.getAllAuthors()
			}
		});
	}
};

module.exports = InitializeActions;
