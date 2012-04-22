/**
 * Creates main menu table view ("index table")
 */

// This method returns a fullwidth view with a table.
// The table contains a row for each demo of titanTricks.
// When a row is clicked, the correspondent demo view is created in a new window
// and destroyed when closed.
//
// Table data is set with App.ui.demos.list array.
// This array is filled by each demo by itself.
// Look at the end of each demo View file to see how it works.

var Mods = require('/ModulePaths');

var IndexRowView = require(Mods.INDEXROWVIEW),
	DemosList = require(Mods.DEMOSLIST),
	DemoWin = require(Mods.DEMOWIN),
	Tools = require(Mods.TOOLS),
	$$ = require(Mods.STYLES);

module.exports = function() {
	var view = Ti.UI.createView($$.FULL_SCREEN);
	
	var rows = [];
	var list = DemosList.list;

	//convert App.ui.demos.list array items in ViewTableRow objects
	
	var oldHeader = '?';
	for(var i = 0, j = list.length; i < j; i++) {
		rows.push(new IndexRowView(list[i]));
		
		//Set header only if is a new header
		if(list[i].header !== oldHeader){
			rows[i].header = list[i].header;
			oldHeader = list[i].header;
		}
	}
	
	var tableView = Ti.UI.createTableView({
		backgroundColor:'transparent',
		top: 0,
		bottom: 0,
		data: rows
	});
	
	//Here is where the demo window is launched.
	//e.row must contain a demo property, which is a reference
	//to the private demoInfo var defined on each demo.
	tableView.addEventListener('click', function(e){
		var row = e.row;
		var title = e.row.demo.component;

		var w = new DemoWin({
			title: title,
			demo: row.demo
		});

		w.open({modal:true});
	});
	
	view.add(tableView);
	
	return view;
}


