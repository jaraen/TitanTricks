
var Mods = require('/ModulePaths');

var DemoTemplateView = require(Mods.TEMPLATEDEMO),
	RowColumnView = require(Mods.ROWCOLUMNVIEW),
	Tools = require(Mods.TOOLS);

//Standard demo declaration used along TitanTricks App to reference each demo.
var demoInfo = {
	title:			'Table with columns (II)',
	description: 	'A basic table with values and controls in columns',
	instructions: 	'RowColumn cells can contain values and controls',
	component: 		'RowColumn',
	header: 		'UI',
	ios:			true,
	android:		true
}

var	LABEL_CELL = {
		textAlign:'center', 
		color:'#fff', 
		top:0, 
		left:0, 
		right:0, 
		bottom:0, 
		font:{
			fontSize:14, 
			fontWeight:'bold'
		}
	};

demoInfo.createView = function(){
	var view = new DemoTemplateView(demoInfo);
	
	var tableHeading = [
		null,
		Ti.UI.createLabel(Tools.combine(LABEL_CELL, {text:'Real'})),
		Ti.UI.createLabel(Tools.combine(LABEL_CELL, {text:'Min'})),
		Ti.UI.createLabel(Tools.combine(LABEL_CELL, {text:'Max'})),
	];
	
	var btnHi = Ti.UI.createButton({top:0, left:5, right:5, bottom:0, title:'hi!'});
	var lblBlue = Ti.UI.createLabel(Tools.combine(LABEL_CELL, {backgroundColor:'#00f', text:':)'}));

	var row3 = [
		'Day 3',
		btnHi,
		lblBlue,
		'-'
	];
	
	var rows = [];
	rows[0] = new RowColumnView({views:tableHeading, cellStyle:LABEL_CELL});
	rows[1] = new RowColumnView({views:['Day 1',	10, 	20, 	30], cellStyle:LABEL_CELL});
	rows[2] = new RowColumnView({views:['Day 2',	'-', 	50, 	60], cellStyle:LABEL_CELL});
	rows[3] = new RowColumnView({views:row3, cellStyle:LABEL_CELL});
	
	var table = Ti.UI.createTableView({
		right:0,
		left:0,
		height:200,
		backgroundColor:'#333',
		data:rows
	});
			
	view.add(table);
	
	//This works fine on Android, but not on iOS.
	//So we have to capture table click and then
	//check the source event.
	/*btnHi.addEventListener('click', function(){
		alert('hi!');
		table.data[3].views[2].text = 'Bye!';
	})*/
	
	table.addEventListener('click', function(e){
		if(e.source === btnHi){
			alert('hi!');
			e.row.views[2].text = 'Bye!';
		}
	});

	return view;
};

	
module.exports = demoInfo;