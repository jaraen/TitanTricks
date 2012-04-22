
var Mods = require('/ModulePaths');

var DemoTemplateView = require(Mods.TEMPLATEDEMO),
	Tools = require(Mods.TOOLS);


//Standard demo declaration used along TitanTricks App to reference each demo.
var demoInfo = {
	title:			'blank demo',
	description: 	'',
	instructions: 	'',
	component: 		'',
	header: 		'UI',
	ios:			true,
	android:		true
};

demoInfo.createView = function(){
	var view = new DemoTemplateView(demoInfo);
	
	
	return view;
};

module.exports = demoInfo;