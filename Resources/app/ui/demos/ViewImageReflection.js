
App.ui.demos.createViewImageReflection = {};

(function(){
	
	App.ui.demos.createViewImageReflection = function(){
		var view = App.ui.createViewDemo(App.combine(demoInfo, {backgroundColor:'#000'}));


		var img = TitanTricks.ui.createImageReflection({
			image: 'http://developer.appcelerator.com/assets/img/badge_titan.png',
			height: 100,
			width: 100,
			top:10,
			bgColor: '#000'
		});
		
		view.add(img);
		
		img.addEventListener('click', function() {
			Ti.API.info('hey');
			if(img.reflect){
				Ti.API.info('hide');
				img.hideReflect();
			}else{
				Ti.API.info('show');
				img.showReflect();
			}
		});
		
		return view;
	};

	//Standard demo declaration used along TitanTricks App to reference each demo.
	var demoInfo = {
		title:			'Image reflection',
		description: 	'Creates an image with its own reflection',
		instructions: 	'Click the image to show/hide its reflection. Only works on iOs.',
		component: 		'ImageReflection',
		header: 		'UI',
		ios:			true,
		android:		false,
		createView: 	App.ui.demos.createViewImageReflection
	}
	
	//add demo info to the array used to fill the index table view.
	App.ui.demos.list.push(demoInfo);

})();