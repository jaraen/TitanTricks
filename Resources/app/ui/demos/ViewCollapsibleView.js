
var Mods = require('/ModulePaths');

var DemoTemplateView = require(Mods.TEMPLATEDEMO),
	CollapsibleView = require(Mods.COLLAPSIBLEVIEW),
	Tools = require(Mods.TOOLS);

var demoInfo = {
	title:			'Collapsible View',
	description: 	'A collapsible container with a clickable header to expand/collapse',
	instructions: 	'Click on the title of each container',
	component: 		'CollapsibleView',
	header: 		'UI',
	ios:			true,
	android:		true
}

demoInfo.createView = function(){
	var view = new DemoTemplateView(demoInfo);
	
	var lblStatus = Ti.UI.createLabel({left:0, right:0, top:5, height:Ti.UI.SIZE, textAlign:'center', color:'#333'});
	
	//Collapsible 1
	var comp1 = Ti.UI.createLabel({
		left:0, right:0, top:0, height:100,
		backgroundColor: '#993333',
		color:'#fff',
		textAlign:'center',
		text:'The body 1'
	});		
	var cView1 = new CollapsibleView({
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
	var cView2 = new CollapsibleView({
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
	var cView3 = new CollapsibleView({
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
		lblStatus.text = e.header + " is now " + (e.collapsed ? 'collapsed':'expanded');
	});
	
	cView2.addEventListener('collapse', function(e){
		lblStatus.text = e.header + " is now " + (e.collapsed ? 'collapsed':'expanded');
	});
	
	cView3.addEventListener('collapse', function(e){
		lblStatus.text = e.header + " is now " + (e.collapsed ? 'collapsed':'expanded');
	});
	
	//view.add(container);
	
	return view;
};

module.exports = demoInfo;

