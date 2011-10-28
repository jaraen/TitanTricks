/**
 * Window template for each demo. Creates a new window, with a toolbar if is under iPhone platform,
 * inserts a ViewTemplateDemo and finally creates the demo view.
 */

App.ui.createWinDemo = {};

(function(){
	
	App.ui.createWinDemo = function(args){
		
		var args = args || {};
		args.title = args.title || '';
		args.demo = args.demo || {
			createView: Ti.UI.createLabel({text:'ERROR: Demo not defined'})
		}
		
		var win = Ti.UI.createWindow(App.combine($$.WINDOW_DEMO, args));
		
		//if iphone or ipad, create a toolbar with a close button
		if(Ti.Platform.osname !== 'android'){
			var toolbar = App.ui.createIosToolBar({title:args.title, win:win});
			win.add(toolbar);
			win.addEventListener('open', function(){
				//workaround...
				toolbar.initiateListeners();
			});
		}

		var scroll = Ti.UI.createScrollView($$.SCROLLDEMO_VIEW);
		scroll.add(args.demo.createView());
		win.add(scroll);

		return win;
	}
	
})();
