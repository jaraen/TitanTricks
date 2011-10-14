
//Always declare public methods on header
//This ways are easier to identify what is in this file
App.ui.createAppWindow = {};

(function(){
	
	App.ui.createAppWindow = function (){
		
		var win = Ti.UI.createWindow ($$.APP_WINDOW);
		
		win.add(App.ui.createViewIndex());

		return win;
	}
})();

