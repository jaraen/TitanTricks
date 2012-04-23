
var Mods = require('/ModulePaths');

var DemoTemplateView = require(Mods.TEMPLATEDEMO),
	ReflectImage = require(Mods.REFLECTIMAGE),
	Tools = require(Mods.TOOLS);

//Standard demo declaration used along TitanTricks App to reference each demo.
var demoInfo = {
	title:			'Image reflection',
	description: 	'Creates an image with its own reflection',
	instructions: 	'Click the image to show/hide its reflection. Only works on iOs.',
	component: 		'ImageReflection',
	header: 		'UI',
	ios:			true,
	android:		false
}

demoInfo.createView = function(){
	var view = new DemoTemplateView(Tools.combine(demoInfo, {height:'100%', backgroundColor:'#000'}));

	var img = new ReflectImage({
		image: 'http://developer.appcelerator.com/assets/img/badge_titan.png',
		height: 100,
		width: 100,
		top:10,
		bgColor: '#000'
	});
	
	view.add(img);
	
	img.addEventListener('click', function() {
		if(img.reflect){
			img.hideReflect();
		}else{
			img.showReflect();
		}
	});
	
	return view;
};

module.exports = demoInfo;
