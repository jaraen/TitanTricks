
App.ui.demos.createViewFlipImage = {};

(function(){
	
	App.ui.demos.createViewFlipImage = function(){
		var view = App.ui.createViewDemo(demoInfo);
		
		//FlipImage does not animate right in vertical layout, so we need an additional view with absolute layout
		var contentView = Ti.UI.createView({left:0, right:0, height:200});
		
		var flipImg = TitanTricks.ui.createFlipImage({
			imageA: 'http://developer.appcelerator.com/assets/img/badge_titan.png',
			imageB:'http://www.mediabistro.com/ebooknewser/files/2011/09/Appcelerator_150.jpg',
			height: 100,
			width: 100
		});
		
		flipImg.addEventListener('click', function() {
			flipImg.flip();
		});
		
		var lbl = Ti.UI.createLabel({
			left:0, right:0, bottom:0,
			height:30,
			color:'#666',
			textAlign:'center',
			font:{fontSize:18}
		});
		
		flipImg.addEventListener('flip', function(e){
			lbl.text = 'flip event: Showing image ' + e.source.activeImage;
		});
		
		contentView.add(flipImg);
		contentView.add(lbl);
		view.add(contentView);
		
		return view;
	};

	//Standard demo declaration used along TitanTricks App to reference each demo.
	var demoInfo = {
		title:			'Flip Image',
		description: 	'A two sides image that flips to show the other side.',
		instructions: 	'Click the image.',
		component: 		'FlipImage',
		header: 		'UI',
		ios:			true,
		android:		false,
		createView: 	App.ui.demos.createViewFlipImage
	}
	
	//add demo info to the array used to fill the index table view.
	App.ui.demos.list.push(demoInfo);

})();