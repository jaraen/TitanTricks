
App.ui.createRowItem = {};

(function(){
	
	
	App.ui.createRowItem = function(item){
		var row = Ti.UI.createTableViewRow(App.combine($$.ROW_DEMO, {
			//header: item.header
			name: item.title,
			demo: item
		}));

		var lblTitle = Ti.UI.createLabel(App.combine($$.LABEL_TITLE_ROW, {
			text: item.title
		}));
		
		row.add(lblTitle);
		
		var lblDesc = Ti.UI.createLabel(App.combine($$.LABEL_DESC_ROW, {
			text: item.description
		}));
		
		if(item.ios){
			var logoIos = Ti.UI.createImageView($$.LOGO_IOS_ROW);
			row.add(logoIos);
		}
		if(item.android){
			var logoAndr= Ti.UI.createImageView($$.LOGO_ANDROID_ROW);
			row.add(logoAndr);
		}
		
		row.add(lblDesc);

		return row;		
	};
	
	
})();
