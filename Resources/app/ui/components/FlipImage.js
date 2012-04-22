/**
 * FlipImage
 * Returns a view with two sides (imageA and imageB)
 * 
 * @param args		properties object with Titanium View properties and proerpties 'imageA' and 'imageB'
 * 					containing url (local or remote) to the image files.
 * 
 * @return Ti.UI.View with a public method flip() that flips the image and fires event 'flip'
 */

module.exports = function(args){
	//args object must contain at least properties imageA and imageB
	var args = args || {};
	
	var view = Ti.UI.createView(args);
	
	var auxView = Ti.UI.createView(args);
	auxView.activeImage = 'A';
	
	var imageA = Ti.UI.createImageView(args);
	imageA.image = args.imageA || '';
	
	var imageB = Ti.UI.createImageView(args);
	imageB.image = args.imageB || '';
	
	view.add(imageA);
	
	auxView.flip = function() {
		if(auxView.activeImage === 'A'){
			auxView.activeImage = 'B';
			view.animate({view:imageB, transition:Ti.UI.iPhone.AnimationStyle.FLIP_FROM_RIGHT}, function(){
				auxView.fireEvent('flip');
			});
		}else if(auxView.activeImage === 'B'){
			auxView.activeImage = 'A';
			view.animate({view:imageA, transition:Ti.UI.iPhone.AnimationStyle.FLIP_FROM_RIGHT}, function(){
				auxView.fireEvent('flip');
			});
		}
	}
	
	imageB.addEventListener('click', function(){
		if(auxView.activeImage === 'B'){
			view.fireEvent('click');
		}
	});
	
	auxView.add(view);
	return auxView;
};