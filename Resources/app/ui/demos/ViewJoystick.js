
var Mods = require('/ModulePaths');

var DemoTemplateView = require(Mods.TEMPLATEDEMO),
	JoystickController = require(Mods.JOYSTICK),
	Tools = require(Mods.TOOLS);
	
//Standard demo declaration used along TitanTricks App to reference each demo.
var demoInfo = {
	title:			'Joystick',
	description: 	'A basic joystick controller',
	instructions: 	'Move the joystick',
	component: 		'JoystickControl',
	header: 		'UI',
	ios:			true,
	android:		false
}

demoInfo.createView = function(){
	var view = new DemoTemplateView(demoInfo);
	
	var lblStatus = Ti.UI.createLabel({
		top:10,
		left:0,
		right:0,
		bottom:30,
		height:'auto',
		textAlign:'center',
		text:'Move the joystick'
	});
	
	//joystick animation does not work fine on ios if it is in a vertical layout, so I create a view with absolute layout
	//to draw the component on the demo view
	var container = Ti.UI.createView({
		left:0, right:0,
		height:150
	});
	
	var joystick = new JoystickController();
	
	joystick.addEventListener('move', function(e){
		lblStatus.text = 'x: ' + Math.round(e.x*100)/100 + ', y: ' + Math.round(e.y*100)/100;
	});
	
	container.add(joystick);
	view.add(lblStatus);
	view.add(container);
	
	return view;
};


	
module.exports = demoInfo;