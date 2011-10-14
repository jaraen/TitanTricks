
App.ui.demos.createViewTableMultiColumns_2 = {};

(function(){

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

	App.ui.demos.createViewTableMultiColumns_2 = function(){
		var view = App.ui.createViewDemo(demoInfo);
		
		var tableHeading = [
			null,
			Ti.UI.createLabel(App.combine(LABEL_CELL, {text:'Real'})),
			Ti.UI.createLabel(App.combine(LABEL_CELL, {text:'Min'})),
			Ti.UI.createLabel(App.combine(LABEL_CELL, {text:'Max'})),
		];
		
		var btnHi = Ti.UI.createButton({top:0, left:5, right:5, bottom:0, title:'hi!'});
		var lblBlue = Ti.UI.createLabel(App.combine(LABEL_CELL, {backgroundColor:'#00f', text:':)'}));

		var row3 = [
			'Day 3',
			btnHi,
			lblBlue,
			'-'
		];
		
		var rows = [];
		rows[0] = TitanTricks.ui.createRowColumn({views:tableHeading, cellStyle:LABEL_CELL});
		rows[1] = TitanTricks.ui.createRowColumn({views:['Day 1',	10, 	20, 	30], cellStyle:LABEL_CELL});
		rows[2] = TitanTricks.ui.createRowColumn({views:['Day 2',	'-', 	50, 	60], cellStyle:LABEL_CELL});
		rows[3] = TitanTricks.ui.createRowColumn({views:row3, cellStyle:LABEL_CELL});
		
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

	//Standard demo declaration used along TitanTricks App to reference each demo.
	var demoInfo = {
		title:			'Table with columns (II)',
		description: 	'A basic table with values and controls in columns',
		instructions: 	'RowColumn cells can contain values and controls',
		component: 		'RowColumn',
		header: 		'UI',
		ios:			true,
		android:		true,
		createView: 	App.ui.demos.createViewTableMultiColumns_2
	}
	
	//add demo info to the array used to fill the index table view.
	App.ui.demos.list.push(demoInfo);

})();