
/**
 * BadgeImage
 * Returns a round bordered Titanium.UI.View with a specified image inside that animates itself when clicked.
 * 
 * @param args		javascript object that should contain, at least, 'image' property with a valid url (local or remote)
 * 					and any other titanium view property.
 * 
 * @return Ti.UI.View
 */

module.exports = function(args){

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
	
	//Android animations require a few more adjustments.
	if(Ti.Platform.osname === 'android'){

		var reverseAnim = Ti.UI.createAnimation({
			bottom: 0,
			autoreverse: true,
			//repeat:1,
			duration:durationAnim,
			curve:Ti.UI.ANIMATION_CURVE_EASE_OUT
		});
		
		if(args.left) {
			anim.left = args.left;
			reverseAnim.left = args.left;
		}
		if(args.right) {
			anim.right = args.right;	
			reverseAnim.right = args.right;
		}
		if(args.top) {
			anim.top = args.top;
			reverseAnim.top = args.top;
		}
		
		//Autoreverse only works on ios, so lets reverse the android animation
		anim.addEventListener('complete', function(){
			view.animate(reverseAnim);
		});
	}
	
	view.addEventListener('click', function(){
			view.animate(anim);
	});

	return view;
};

