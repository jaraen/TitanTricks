//
// Creates a reflection effect. Only iOS (transform does not work fine on android)
//

TitanTricks.ui.createImageReflection = {};

(function(){
	
	TitanTricks.ui.createImageReflection = function(args){

		var args = args || {};
		args.reflect = args.reflect || true;
		
		var view = Ti.UI.createView(args);

		args.image = args.image || 'none';
		args.bgColor = args.bgColor || '#000';
		args
		
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
	}
	
})();
