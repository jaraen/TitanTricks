
TitanTricks.ui.createFlipImage = {};

(function(){
	
	TitanTricks.ui.createFlipImage = function(args){
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
	}
	
})();
