/**
 * Declares App global object and mixes with tools function
 */


var App = {};

var TitanTricks = {};
TitanTricks.ui = require('modules/TitanTricksUIComponents');

(function(){
	
	tools.mixin(App, tools);
	
})();

//include all index-files for each folder

Ti.include(
	'/app/config/config.js', 
	'/app/model/model.js', 
	'/app/ui/ui.js'
);
