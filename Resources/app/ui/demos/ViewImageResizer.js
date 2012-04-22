
var Mods = require('/ModulePaths');

var DemoTemplateView = require(Mods.TEMPLATEDEMO),
	ImageResizer = require(Mods.IMAGERESIZER),
	Tools = require(Mods.TOOLS);

//Standard demo declaration used along TitanTricks App to reference each demo.
var demoInfo = {
	title:			'Image resizer',
	description: 	'Resizes an image from gallery for upload or send by email',
	instructions: 	'Select an image from gallery and send it by e-mail. This demo only works on iOS, but ImageResizer component should work on android.',
	component: 		'ImageResizer',
	header: 		'UI',
	ios:			true,
	android:		false
}

demoInfo.createView = function(){
	var view = new DemoTemplateView(demoInfo);
	
	//for this demo, set largest side of the image in pixels. The new image will fit in this size.
	var MAX_SIZE = 200;

	//object that will containt an image from gallery already resized
	var imageView = Ti.UI.createImageView();
	var imageResized = {};
	
	var lblMaxSize = Ti.UI.createLabel({
		top:10,
		left:10,
		right:10,
		textAlign:'center',
		height:'auto',
		text:'Max size is set to ' + MAX_SIZE + ' px.'
	});
	
	view.add(lblMaxSize);
	

	var btnGallery = Ti.UI.createButton({
		title:'Select photo from gallery',
		top:10,
		left:10,
		right:10,
		height:40
	});
	
	view.add(btnGallery);
	
	var lblSize = Ti.UI.createLabel({
		top:10,
		left:10,
		right:10,
		textAlign:'center',
		height:'auto'
	});
	
	view.add(lblSize);

	var btnMail = Ti.UI.createButton({
		title:'Save and send by e-mail',
		top:10,
		left:10,
		right:10,
		height:40,
		visible:false
	});
	
	view.add(btnMail);
	
	view.add(imageView);
	
	//Open gallery
	btnGallery.addEventListener('click', function() {
		Titanium.Media.openPhotoGallery({
			success:function(evt)
			{	
				
				//Seems that in android, event.media object does not return height and width properties
				//It is a shame, because for this reason the demo does not work, I'll have to do another
				//demo for android 
				if(Ti.Platform.osname !== 'android'){
					//Set max. dimension properties, could be different for each property height or width
					evt.media.maxWidth = MAX_SIZE;
					evt.media.maxHeight = MAX_SIZE;

					imageResized = new ImageResizer(evt.media);
					
					imageView.image = imageResized.toImage();
					
					imageView.width = imageResized.width;
					imageView.height = imageResized.height;
					
					btnMail.visible = true;

					lblSize.text = "Original size: " + evt.media.width + ' x '+evt.media.height + ' px. \n';
					lblSize.text += "New size: " + evt.media.newWidth + ' x ' + evt.media.newHeight + ' px.';
				}else{
					lblSize.text = "Sorry, this demo does not work on Android. But you can even use ImageResizer component in your apps.";
				}	
			},
			cancel:function()
			{
			},
			error:function(error)
			{
			},
			allowEditing:false,
			showControls:true
		});
	});
	
	//Send mail
	btnMail.addEventListener('click', function() {
		imageResized.sendMail({
			subject: 'Image resized by TitanTricks'
		});
	});

	return view;
};


	
module.exports = demoInfo;