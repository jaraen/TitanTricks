
/**
 * Row renderer for main index table view (ViewIndex.js)
 */
var Mods = require('/ModulePaths');

var Tools = require(Mods.TOOLS),
	$$ = require(Mods.STYLES);


module.exports = function(item){
	var row = Ti.UI.createTableViewRow(Tools.combine($$.ROW_DEMO, {
		//header: item.header
		name: item.title,
		demo: item
	}));

	var lblTitle = Ti.UI.createLabel(Tools.combine($$.LABEL_TITLE_ROW, {
		text: item.title
	}));
	
	row.add(lblTitle);
	
	var lblDesc = Ti.UI.createLabel(Tools.combine($$.LABEL_DESC_ROW, {
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