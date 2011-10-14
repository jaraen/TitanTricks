
//Always declare public methods on header
//This ways are easier to identify what is in this file
App.ui.createAppWindow = {};

(function(){
	
	App.ui.createAppWindow = function (){
		
		var win = Ti.UI.createWindow ($$.APP_WINDOW);
		
		win.add(App.ui.createViewIndex());
		
		if(Ti.Platform.osname === 'android'){	
			//Note that usually Ti.Android.currentActivity is used
			//but if there is a tabGroup you should use win.activity instead
			
			win.activity.onCreateOptionsMenu = function (e) {
			    var menu = e.menu;  
			    var menuItem1 = menu.add({ title: "Preferencias" });     

			    menuItem1.addEventListener("click", function(e) {
			        Ti.UI.Android.openPreferences();
			        alert(Titanium.App.Properties.getString("username"));
			    });

			};
		} 	
		
		return win;
	}
})();

