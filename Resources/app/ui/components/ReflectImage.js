/**
 * ReflectImage
 * Returns a view containing an image passed in arguments and its reflection, created by transformations and gradients.
 * Works better in black background.
 * 
 * @param args		properties object with Titanium imageView properties.
 * 
 * @return Ti.UI.View with two public methods: showReflection() and hideReflection();
 */

module.exports = function(args){

	var args = args || {};
	args.reflect = args.reflect || true;
	
	var view = Ti.UI.createView(args);
	view.height *= 2;	//double the component height to fit the mirror image

	args.image = args.image || 'none';
	args.bgColor = args.bgColor || '#000';
	
	var img = Ti.UI.createImageView(args);
	
	var imgReflection = Ti.UI.createImageView(args);
	imgReflection.top = args.height + 10;
	
	imgReflection.transform = Ti.UI.create2DMatrix().scale(1,-1); //flip vertically
	
	imgReflection.addEventListener('load', function(){
		var gradient = Ti.UI.createView({top:0,left:0, right:0, bottom:0, zIndex:10,
					backgroundGradient:{
						type:'linear',
						colors:[args.bgColor,'transparent']
					}
				});
		imgReflection.add(gradient);	
	});

	view.add(img);
	view.add(imgReflection);
	
	//Public methods
	
	view.showReflect = function() {
		imgReflection.show();
		view.reflect = true;
	}

	view.hideReflect = function() {
		imgReflection.hide();
		view.reflect = false;
	}
			
	return view;
};
