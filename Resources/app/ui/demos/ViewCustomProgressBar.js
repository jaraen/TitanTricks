
var Mods = require('/ModulePaths');

var DemoTemplateView = require(Mods.TEMPLATEDEMO),
	CustomProgressBar = require(Mods.PROGRESSBAR),
	Tools = require(Mods.TOOLS);

//Standard demo declaration used along TitanTricks App to reference each demo.
var demoInfo = {
	title:			'Custom progress bar',
	description: 	'A customizable progress bar',
	instructions: 	'Change parameters to customize the progress bar. Change background and foreground colors in code and other view properties as border or backgroundimage.',
	component: 		'CustomProgressBar',
	header: 		'UI',
	ios:			true,
	android:		true
}

demoInfo.createView = function(){
	
	var view = new DemoTemplateView(demoInfo);

	var pgBar = new CustomProgressBar({
		min:0,
		max:100,
		left: 20,
		right: 20,
		top:10,
		value:10,
		borderRadius:5,
		backgroundColor: '#333',
		foregroundColor: '#dd0000'
	});
	
	view.add(pgBar);
	
	var viewControls = Ti.UI.createView({
		top:10,
		left:0,
		right:0,
		height:200,
		layout:'vertical'
	});
	
	//Value
	var lblValue = Ti.UI.createLabel({
		text:'Value:',
		color:'#333',
		height:20,
		left:20,
		top:20
	});
	
	var slideValue = Ti.UI.createSlider({
		min:0,
		max:100,
		value:10,
		height:30,
		left:20,
		right:20
	});
	
	slideValue.addEventListener('change', function(e){
		pgBar.SetValue(e.source.value);
	});
	
	//Height
	var lblHeight = Ti.UI.createLabel({
		text:'Height:',
		color:'#333',
		left:20,
		height:30,
		top:10
	});
	
	var slideHeight = Ti.UI.createSlider({
		min:1,
		max:50,
		value:10,
		height:30,
		left:20,
		right:20,
		bottom:20
	});
	
	slideHeight.addEventListener('change', function(e){
		pgBar.height = e.source.value;
	});
	
	view.add(lblValue);
	view.add(slideValue);
	view.add(lblHeight);
	view.add(slideHeight);

	return view;
};

module.exports = demoInfo;
