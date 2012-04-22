

var Mods = require('/ModulePaths');

var DemoTemplateView = require(Mods.TEMPLATEDEMO),
	SwitchButton = require(Mods.SWITCHBUTTON),
	Tools = require(Mods.TOOLS);

//Standard demo declaration used along TitanTricks App to reference each demo.
var demoInfo = {
	title:			'Custom switch button',
	description: 	'A customizable graphic button with two states (on/off)',
	instructions: 	'Click the buttons.',
	component: 		'SwitchButton',
	header: 		'UI',
	ios:			true,
	android:		true
}

demoInfo.createView = function(){
	var view = new DemoTemplateView(demoInfo);
	
	//ios switch fake
	var btn1 = new SwitchButton({
		top:10,
		width:94,
		height:27,
		value:false, //set initial value
		imageOn:'/imgs/switchOn.png',
		imageOff:'/imgs/switchOff.png'
	});
	
	view.add(btn1);
	
	//bulb
	var btn2 = new SwitchButton({
		top:10,
		width:80,
		height:80,
		value:true,
		imageOn:'/imgs/bulbOn.png',
		imageOff:'/imgs/bulbOff.png'
	});
	
	view.add(btn2);
	
	//button
	var btn3 = new SwitchButton({
		top:20,
		width:100,
		height:50,
		value:false,
		color:'#999',
		font:{fontSize:14, fontWeight:'bold'},
		imageOn:'/imgs/btnOn.png',
		imageOff:'/imgs/btnOff.png'
	});
	
	view.add(btn3);
	
	btn3.addEventListener('change', function(e){
		btn3.title = 'Switch ' + (e.value ? 'On' : 'Off');
	});
	
	return view;
};

module.exports = demoInfo;