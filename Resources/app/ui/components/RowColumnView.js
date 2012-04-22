/**
 * RowColumnView
 * Returns a TableViewRow that automatically creates columns with the 'views' array received as argument
 * 
 * @param args		properties object with Titanium TableViewRow properties and a custom property
 * 					- views: array of views to compose the columns. All columns will have the same width.
 * 					  Array elements can be numbers, strings or any Titanium UI component. Numbers and strings are
 * 					  converted to label component with 'cellStyle' style
 * 					- cellWidth: force a width for all the cells (columns)
 * 					- cellStyle: a properties object with Titanium Label properties. If not defined, LABEL_DEFAULT private var
 * 					  is used as default style.
 * 
 * @return TableViewRow
 */

var Mods = require('/ModulePaths');

var	Tools = require(Mods.TOOLS);


module.exports = function(args){

	var	LABEL_DEFAULT = {
			textAlign:'center', 
			color:'#111', 
			top:0, 
			left:0, 
			right:0, 
			bottom:0, 
			font:{
				fontSize:12, 
				fontWeight:'bold'
			}
		};

	var args = args || {};
	//Property views contains an array of elements to dispose along the row
	args.views = args.views || [];
	var num_cells = args.views.length;
	args.cellWidth = args.cellWidth || Ti.Platform.displayCaps.platformWidth / num_cells - 5;
	args.cellStyle = args.cellStyle || LABEL_DEFAULT;
	
	//The important thing here is the layout:horizontal property
	var row = Ti.UI.createTableViewRow({
		height: args.height || 30,
		left:0,
		right:0,
		top:0,
		layout:'horizontal',
		views: args.views,
		cellWidth:args.cellWidth,
		cellStyle: args.cellStyle
	});

	function createViewCell(comp){
		var v = Ti.UI.createView({
			height: row.height,
			width: args.cellWidth
		});

		if(comp){
			//Ti.API.info(typeof comp + ' = ' + comp.toString());
			if(typeof comp === 'string' || typeof comp === 'number'){
				v.add(Ti.UI.createLabel(Tools.combine(row.cellStyle, {text:comp})));
			}else{
				v.add(comp);
			}
		}
		
		return v;
	}
	
	row.draw = function(){
		for(var i = 0, j = args.views.length; i < j; i++){
			row.add(createViewCell(args.views[i]));
		}
	}
	
	row.draw();
	
	return row;
};