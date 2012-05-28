

var Mods = require('/ModulePaths');

var DemoTemplateView = require(Mods.TEMPLATEDEMO),
	Tools = require(Mods.TOOLS);

//Standard demo declaration used along TitanTricks App to reference each demo.
var demoInfo = {
	title:			'About TitanTricks project',
	description: 	'This app is made with Titanium. Learn more about this awesome technology.',
	instructions: 	'',
	component: 		'',
	header: 		'About',
	ios:			true,
	android:		true
}

demoInfo.createView = function(){
	var view = new DemoTemplateView(demoInfo);
	
	var msg = 'TitanTricks is a sample project for developers featuring some cool programming techniques with Titanium Appcelerator.\n\n';
	msg += 'Thanks to Titanium, this app runs natively under Android, iOS and mobile web. Is completely developed with JavaScript and the source code can be found at http://www.github.com/jaraen\n\n';
	msg += 'This app is made by independant developer and Titan user Javier Rayon.';
	
	var label = Ti.UI.createLabel({
		left:10, right:10, textAlign:'center',
		font:{fontSize:12},
		color:'#000',
		text:msg
	});
	
	var btnWeb = Ti.UI.createButton({
		title:'Visit web version',
		left:20, right:20,
		 height:Ti.UI.SIZE,
		top:10
	});
	
	
	var btnGit = Ti.UI.createButton({
		title:'Goto Git repository',
		left:20, right:20,
		 height:Ti.UI.SIZE,
		top:10
	});
	
	
	var btnTitanium = Ti.UI.createButton({
		title:'Go to Appcelerator.com',
		left:20, right:20,
		 height:Ti.UI.SIZE,
		top:10
	});
	
	btnWeb.addEventListener('click', function(){
		Ti.Platform.openURL('http://www.titantricks.com/mobile');
	});
	
	btnGit.addEventListener('click', function(){
		Ti.Platform.openURL('http://www.github.com/jaraen');
	});
	
	btnTitanium.addEventListener('click', function(){
		Ti.Platform.openURL('http://www.appcelerator.com');
	});
	
	view.add(label);
	view.add(btnWeb);
	view.add(btnGit);
	view.add(btnTitanium);
	
	return view;
};

module.exports = demoInfo;