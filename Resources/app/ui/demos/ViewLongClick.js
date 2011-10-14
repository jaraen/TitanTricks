
App.ui.demos.createViewLongClick = {};

(function(){

	App.ui.demos.createViewLongClick = function(){
		
		var view = App.ui.createViewDemo(demoInfo);
		
		var btn = TitanTricks.ui.createLongClickButton({
			top:20,
			left:40,
			right:40,
			height:40,
			title:'Click me and hold'
		});
		
		view.add(btn);
		
		var btn2 = TitanTricks.ui.createLongClickButton({
			top:10,
			left:40,
			right:40,
			height:40,
			delay:1500,
			title:'Click me and hold even more'
		});
		
		view.add(btn2);
		
		btn.addEventListener('longclick', function(e){
			alert('yeah, thats a long click of ' + e.source.delay + ' ms.');
		});
		
		btn2.addEventListener('longclick', function(e){
			alert('yeah, thats a long click of ' + e.source.delay + ' ms.');
		});

		btn.addEventListener('click', function(e){
			alert('normal click event');
		});
		
		btn2.addEventListener('click', function(e){
			alert('another normal click event');
		});
		

		return view;
	};

	/**
	 * Demo info and indexing. Must be after the demo function declaration.
	 */
	//Standard demo declaration used along TitanTricks App to reference each demo.
	var demoInfo = {
		title:			'\"LongClick\" event',
		description: 	'Capture a long click event',
		instructions: 	'Click and hold the buttons. Use the \'delay\' property to set the time the user has to hold it to fire event.',
		component:		'LongClickButton',
		header: 		'UI',
		ios:			true,
		android:		true,
		createView: 	App.ui.demos.createViewLongClick
	}
	
	//add demo info to the array used to fill the index table view.
	App.ui.demos.list.push(demoInfo);
	
})();
