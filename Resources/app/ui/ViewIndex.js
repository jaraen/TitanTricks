//This method returns a fullwidth view with a table.
//The table contains a row for each demo of titanTricks.
//When a row is clicked, the correspondent demo view is created in a new window
//and destroyed when closed


App.ui.createViewIndex = {};

(function(){

	//Table data is set with App.ui.demos.list array.
	//This array is filled by each demo by itself.
	//Look at the end of each demo View file to see how it works.

	App.ui.createViewIndex = function(){
		
		var view = Ti.UI.createView($$.FULL_SCREEN);
		
		var rows = [];
		var list = App.ui.demos.list;

		//convert App.ui.demos.list array items in ViewTableRow objects
		var oldHeader = '?';
		for(var i = 0, j = list.length; i < j; i++) {
			rows.push(App.ui.createRowItem(list[i]));
			
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

			var w = App.ui.createWinDemo({
				title: title,
				demo: row.demo
			});

			w.open();
		});
		
		view.add(tableView);
		
		return view;
	}
	
})();
