
App.ui.demos.createViewBadgeImage = {};

(function(){
	
	App.ui.demos.createViewBadgeImage = function(){
		var view = App.ui.createViewDemo(demoInfo);
		
		//FlipImage does not animate right in vertical layout, so we need an additional view with absolute layout
		var contentView = Ti.UI.createView({left:0, right:0, height:200});
		
		var badgeImg1 = TitanTricks.ui.createBadgeImage({
			image: 'http://developer.appcelerator.com/assets/img/badge_titan.png',
			height: 100,
			left:20,
			width: 100,
			bottom:0
		});
		
		var badgeImg2 = TitanTricks.ui.createBadgeImage({
			image: 'http://developer.appcelerator.com/assets/img/badge_titan.png',
			height: 100,
			width: 100,
			bottom:0
		});
		
		var badgeImg3 = TitanTricks.ui.createBadgeImage({
			image: 'http://developer.appcelerator.com/assets/img/badge_titan.png',
			height: 100,
			width: 100,
			right:20,
			bottom:0
		});

		contentView.add(badgeImg1);
		contentView.add(badgeImg2);
		contentView.add(badgeImg3);

		view.add(contentView);
		
		return view;
	};

	//Standard demo declaration used along TitanTricks App to reference each demo.
	var demoInfo = {
		title:			'Badge Image',
		description: 	'A badge image with a click animation',
		instructions: 	'Click the image.',
		component: 		'BadgeImage',
		header: 		'UI',
		ios:			true,
		android:		false,
		createView: 	App.ui.demos.createViewBadgeImage
	}
	
	//add demo info to the array used to fill the index table view.
	App.ui.demos.list.push(demoInfo);

})();