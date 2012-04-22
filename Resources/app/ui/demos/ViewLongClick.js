
var Mods = require('/ModulePaths');

var DemoTemplateView = require(Mods.TEMPLATEDEMO),
	LongClickButton = require(Mods.LONGCLICKBUTTON),
	Tools = require(Mods.TOOLS);

var demoInfo = {
	title:			'\"LongClick\" event',
	description: 	'Capture a long click event',
	instructions: 	'Click and hold the buttons. Use the \'delay\' property to set the time the user has to hold it to fire event.',
	component:		'LongClickButton',
	header: 		'UI',
	ios:			true,
	android:		true
}


demoInfo.createView = function(){
		
	var view = new DemoTemplateView(demoInfo);
	
	var btn = new LongClickButton({
		top:20,
		left:40,
		right:40,
		height:40,
		title:'Click me and hold'
	});
	
	view.add(btn);
	
	var btn2 = new LongClickButton({
		top:10,
		left:40,
		right:40,
		height:40,
		delay:1500,
		title:'Click me and hold even more'
	});
	
	view.add(btn2);
	
	btn.addEventListener('longclick', function(e){
		alert('yeah, thats a long click of ' + e.delay + ' ms.');
	});
	
	btn2.addEventListener('longclick', function(e){
		alert('yeah, thats a long click of ' + e.delay + ' ms.');
	});

	btn.addEventListener('click', function(e){
		alert('normal click event');
	});
	
	btn2.addEventListener('click', function(e){
		alert('another normal click event');
	});
	

	return view;
};

	
module.exports = demoInfo;