
var Mods = require('/ModulePaths');

var DemoTemplateView = require(Mods.TEMPLATEDEMO),
	RowColumnView = require(Mods.ROWCOLUMNVIEW),
	Tools = require(Mods.TOOLS);

//Standard demo declaration used along TitanTricks App to reference each demo.
var demoInfo = {
	title:			'Table with columns (I)',
	description: 	'A basic table with simple data in columns',
	instructions: 	'Number and string values are converted to labels automatically by RowColumn component',
	component: 		'RowColumn',
	header: 		'UI',
	ios:			true,
	android:		true
};

demoInfo.createView = function(){
	var view = new DemoTemplateView(demoInfo);
	
	var rows = [];
	rows[0] = new RowColumnView({views:[null,		'Real', 'Min', 'Max']});
	rows[1] = new RowColumnView({views:['Day 1',	10, 	7, 	30]});
	rows[2] = new RowColumnView({views:['Day 2',	'-', 	'!', 	60]});
	rows[3] = new RowColumnView({views:['Day 3',	41, 	'-', 	90.5]});
	
	var table = Ti.UI.createTableView({
		right:0,
		left:0,
		height:200,
		backgroundColor:'#fff',
		data:rows
	});
			
	view.add(table);
	
	return view;
};

module.exports = demoInfo;
