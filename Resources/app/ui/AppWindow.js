
/**
 * Creates main window creator function
 */

//Always declare public methods on header
//This ways is easier to find out the file content.
App.ui.createAppWindow = {};

(function(){
	
	App.ui.createAppWindow = function (){
		
		var win = Ti.UI.createWindow ($$.APP_WINDOW);
		
		win.add(App.ui.createViewIndex());

		return win;
	}
})();

