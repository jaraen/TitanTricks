
App.ui.demos.createViewTableMultiColumns_1 = {};

(function(){
	
	App.ui.demos.createViewTableMultiColumns_1 = function(){
		var view = App.ui.createViewDemo(demoInfo);
		
		var rows = [];
		rows[0] = TitanTricks.ui.createRowColumn({views:[null,		'Real', 'Min', 'Max']});
		rows[1] = TitanTricks.ui.createRowColumn({views:['Day 1',	10, 	7, 	30]});
		rows[2] = TitanTricks.ui.createRowColumn({views:['Day 2',	'-', 	'!', 	60]});
		rows[3] = TitanTricks.ui.createRowColumn({views:['Day 3',	41, 	'-', 	90.5]});
		
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

	//Standard demo declaration used along TitanTricks App to reference each demo.
	var demoInfo = {
		title:			'Table with columns (I)',
		description: 	'A basic table with simple data in columns',
		instructions: 	'Number and string values are converted to labels automatically by RowColumn component',
		component: 		'RowColumn',
		header: 		'UI',
		ios:			true,
		android:		true,
		createView: 	App.ui.demos.createViewTableMultiColumns_1
	}
	
	//add demo info to the array used to fill the index table view.
	App.ui.demos.list.push(demoInfo);

})();