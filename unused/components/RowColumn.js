TitanTricks.ui.createRowColumn = {};

(function(){

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
	
	TitanTricks.ui.createRowColumn = function(args){
		
		var args = args || {};
		//Property views contains an array of elements to dispose along the row
		args.views = args.views || [];
		var num_cells = args.views.length;
		args.cellWidth = args.cellWidth || Ti.Platform.displayCaps.platformWidth / num_cells -5;
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
					v.add(Ti.UI.createLabel(App.combine(row.cellStyle, {text:comp})));
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
})();
