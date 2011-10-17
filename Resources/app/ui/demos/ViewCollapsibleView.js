//Use this file as template for new demos

//replace this function with your own method identifier
App.ui.demos.createViewCollapsibleView = {};

(function(){
	
	//replace this function with your own method identifier
	App.ui.demos.createViewCollapsibleView = function(){
		var view = App.ui.createViewDemo(demoInfo);
		
		var lblStatus = Ti.UI.createLabel({left:0, right:0, top:5, height:'auto', textAlign:'center', color:'#333'});
		
		//Collapsible 1
		var comp1 = Ti.UI.createLabel({
			left:0, right:0, top:0, height:100,
			backgroundColor: '#993333',
			color:'#fff',
			textAlign:'center',
			text:'The body 1'
		});		
		var cView1 = TitanTricks.ui.createCollapsibleView({
			title:'The header',
			body:comp1,
			collapsed:true,
			top:10,
			right:10,
			left:10,
			backgroundColor:'#efefef',
			borderRadius:5
		});
		
		//Collapsible 2
		var comp2 = Ti.UI.createLabel({
			left:0, right:0, top:0, height:120,
			backgroundColor: '#993333',
			color:'#fff',
			textAlign:'center',
			text:'The body 2'
		});		
		var cView2 = TitanTricks.ui.createCollapsibleView({
			title:'The header 2',
			body:comp2,
			collapsed:true,
			top:10,
			right:10,
			left:10,
			backgroundColor:'#efefef',
			borderRadius:5
		});
		
		//Collapsible 3
		var comp3 = Ti.UI.createLabel({
			left:0, right:0, top:0, height:60,
			backgroundColor: '#993333',
			color:'#fff',
			textAlign:'center',
			text:'The body 3'
		});		
		var cView3 = TitanTricks.ui.createCollapsibleView({
			header:Ti.UI.createLabel({text:'   The header 3', height:40, color:'#fff', left:0, right:0, borderRadius:5, font:{fontWeight:'bold'}, backgroundColor:'#666'}),
			body:comp3,
			collapsed:true,
			top:10,
			right:10,
			left:10,
			backgroundColor:'#efefef',
			borderRadius:5
		});
		
		view.add(lblStatus);
		
		view.add(cView1);
		view.add(cView2);
		view.add(cView3);
		
		cView1.addEventListener('collapse', function(e){
			lblStatus.text = e.source.header.text + " is now " + (e.source.collapsed ? 'collapsed':'expanded');
		});
		
		cView2.addEventListener('collapse', function(e){
			lblStatus.text = e.source.header.text + " is now " + (e.source.collapsed ? 'collapsed':'expanded');
		});
		
		cView3.addEventListener('collapse', function(e){
			lblStatus.text = e.source.header.text + " is now " + (e.source.collapsed ? 'collapsed':'expanded');
		});
		
		//view.add(container);
		
		return view;
	};

	//Standard demo declaration used along TitanTricks App to reference each demo.
	var demoInfo = {
		title:			'Collapsible View',
		description: 	'A collapsible container with a clickable header to expand/collapse',
		instructions: 	'Click on the title of each container',
		component: 		'CollapsibleView',
		header: 		'UI',
		ios:			true,
		android:		true,
		createView: 	App.ui.demos.createViewCollapsibleView //Replace by your creator function
	}
	
	//UNCOMMENT THIS LINE. IS COMMENTED TO AVOID THE BLANK VIEW APPEARS IN THE DEMOS INDEX
	//add demo info to the array used to fill the index table view.
	App.ui.demos.list.push(demoInfo);

})();