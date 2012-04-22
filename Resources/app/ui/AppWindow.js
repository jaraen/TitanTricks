/**
 * Creates main window creator function
 */


var Mods = require('/ModulePaths');

var IndexView = require(Mods.INDEXVIEW),
	Tools = require(Mods.TOOLS),
	$$ = require(Mods.STYLES);

module.exports = function() {
	var win = Ti.UI.createWindow ($$.APP_WINDOW);
	
	win.add(new IndexView());

	return win;
}
