/**
 * Function for iPhone toolBar creation (Android does not need a toolbar). Used in WinDemo.js
 */

App.ui.createIosToolBar = {};

(function(){
	
	App.ui.createIosToolBar = function(args){
		
		var args = args || {};
		args.title = args.title || 'Not defined';
		
		var btnClose = Ti.UI.createButton({
			title:'Close',
			style:Titanium.UI.iPhone.SystemButtonStyle.BORDERED
		});
		
		var toolBar = Ti.UI.createToolbar({
			top:0
		});
		var flexSpace = Titanium.UI.createButton({
			systemButton:Titanium.UI.iPhone.SystemButton.FLEXIBLE_SPACE
		});
		
		var lblTitle = Ti.UI.createLabel({
			left:0,
			right:0,
			textAlign:'center',
			color:'#fff',
			shadowOffset:{x:0,y:1},
			shadowColor:'#333',
			font:{fontSize:16, fontWeight:'bold'},
			text:args.title
		});
		
		toolBar.items = [flexSpace, lblTitle, flexSpace, btnClose];
		
		toolBar.initiateListeners = function() {
			//workaround for a bug adding listeners to a toolbar declared inside a function
			btnClose.addEventListener('click', function() {
				args.win.close();
			});
		}
		
		return toolBar;
		
	}
	
})();
