//Creates and return a circle view with a wide border wiht the image inside.

TitanTricks.ui.createBadgeImage = {};

(function(){
	
	TitanTricks.ui.createBadgeImage = function(args){

		var args = args || {};
		args.badge = args.badge || {
			borderColor: '#fff',
			borderRadius: args.width / 2,
			borderWidth: 10
		};
		
		var view = Ti.UI.createView(args);

		var img = Ti.UI.createImageView(args);

		img.borderColor = args.badge.borderColor; // '#fff';
		img.borderRadius = args.badge.borderRadius;
		img.borderWidth = args.badge.borderWidth;

		view.add(img);
		
		var bottomAnim = 50;
		var durationAnim = 400;

		var anim = Ti.UI.createAnimation({
			bottom: bottomAnim,
			autoreverse: true,
			//repeat:1,
			duration:durationAnim,
			curve:Ti.UI.ANIMATION_CURVE_EASE_OUT
		});

		//autoreverse only works on ios, so a workaround is needed
		if(Ti.Platform.osname === 'android'){
			anim.addEventListener('complete', function(){
				view.animate({
					bottom:0,
					left:args.left || 0,
					rigth:args.rigth || 0,
					top:args.top || 0,
					duration:durationAnim
				});
			});
		}
		
		view.addEventListener('click', function(){
			if(Ti.Platform.osname === 'android'){
				view.animate(anim);
			}else{
				img.animate(anim);
			}
		});
	
		return view;
	}
	
})();
