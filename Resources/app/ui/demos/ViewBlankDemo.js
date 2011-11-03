//Use this file as template for new demos

//replace this function with your own method identifier
App.ui.demos.createViewBlank = {};

(function(){
	
	//replace this function with your own method identifier
	App.ui.demos.createViewBlank = function(){
		var view = App.ui.createViewDemo(demoInfo);
		
		
		return view;
	};

	//Standard demo declaration used along TitanTricks App to reference each demo.
	var demoInfo = {
		title:			'',
		description: 	'',
		instructions: 	'',
		component: 		'',
		header: 		'UI',
		ios:			true,
		android:		true,
		createView: 	App.ui.demos.createViewBlank //Replace by your creator function
	}
	
	//add demo info to the array used to fill the index table view.
	App.ui.demos.list.push(demoInfo);

})();