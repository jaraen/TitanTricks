/**
 * View template for demos. Includes a title, description, demo instructions and a space
 * to build the demo (in a vertical layout, which must be considered by the demo itself)
 */

App.ui.createViewDemo = {};

(function(){
	
	App.ui.createViewDemo = function(args){
		
		var args = args || {};
		
		var view = Ti.UI.createView(App.combine($$.VIEW_DEMO, args));
		
		var viewLabels = Ti.UI.createView({
			top:0,
			height:140,
			layout:'vertical',
			backgroundColor:'#eee',
		});
		var lblTitle = Ti.UI.createLabel(App.combine($$.LABEL_TITLE, {
			text:args.title
		}));

		if(args.ios){
			var logoIos = Ti.UI.createImageView($$.LOGO_IOS_ROW);
			lblTitle.add(logoIos);
		}
		if(args.android){
			var logoAndr= Ti.UI.createImageView($$.LOGO_ANDROID_ROW);
			lblTitle.add(logoAndr);
		}

		viewLabels.add(lblTitle);

		var lblDesc = Ti.UI.createLabel(App.combine($$.LABEL_DESC, {
			text:args.description + '\n\n' + args.instructions
		}));
		
		viewLabels.add(lblDesc);
		
		view.add(viewLabels);
	
		return view;		
	}
	
})();
