/**
 * TitanTricks UI. Reusable Components for Titanium Mobile - CommonJS Module
 * 
 * @version      0.2
 * @author       Javier Rayon, 2011. Criteria Studio.
 * 
 * Implemented methods are:
 * 
 * - createBadgeImage
 * - createCollapsibleView
 * - createProgressBar
 * - createFlipImage
 * - createImageReflection
 * - createImageResizer
 * - createLongClickButton
 * - createRowColumn
 * - createSwitchButton
 * 
 */


/**
 * BadgeImage
 * Returns a round bordered Titanium.UI.View with a specified image inside that animates itself when clicked.
 * 
 * @param args		javascript object that sould contain, at least, 'image' property with a valid url (local or remote)
 * 					and any other titanium view property..
 * 
 * @return Ti.UI.View
 */

exports.createBadgeImage = function(args){

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
};


/**
 * CollapsibleView
 * Returns a collapsible view with a clickable header, which collapses/expand the view.
 * 
 * @param args		javascript object that should contain a 'header' property (a string or a Ti.UI component) 
 * 					and a 'body' property (the view to show/hide) and any other standard titanium view property.
 * 
 * @return Ti.UI.View with public method collapse(true|false) to collapse/expand the body view
 */

exports.createCollapsibleView = function(args){
	
	var android = Ti.Platform.osname === 'android';
	
	var args = args || {};

	args.header = args.header || Ti.UI.createLabel({text:args.title, height:40, color:'#000', left:10, right:0});
	args.body = args.body || Ti.UI.createView({height:10});
	args.collapsed = args.collapsed===undefined ? false:args.collapsed;
	args.layout = 'vertical';
	args.backgroundColor = args.backgroundColor || args.header.backgroundColor;
	
	var header = args.header;
	header.top = 0;
	header.left = header.left || 0;
	header.right = 0;
	header.bottom = 0;
	
	var body = args.body;

	//determine initial height for the view
	args.height = args.collapsed ? header.height : header.height + body.height;
	
	var view = Ti.UI.createView(args);

	view.add(header);
	view.add(body);
	
	view.collapse = function(status){
		if(status){
			//Yes, I'm sure of this. In this case, animation works fine on android, and not on iOS!!
			if(android){
				view.animate({height:header.height, duration:150}, function(){
					view.height = header.height;
					view.collapsed = true;
				});
			}else{
				view.height = header.height;
				view.collapsed = true;
			}
		} else {
			if(android){
				view.animate({height:header.height + body.height + header.bottom, duration:150}, function(){
					view.height = header.height + body.height + header.bottom;
					view.collapsed = false;
				});
			}else{
				view.height = header.height + body.height + header.bottom;
				view.collapsed = false;
			}
		}
	}
	
	header.addEventListener('click', function(){
		view.fireEvent('collapse', {collapsed:view.collapsed});
		view.collapse(!view.collapsed);
	});
	
	return view;
};


/**
 * ProgressBar
 * Returns a customizable progress bar
 * 
 * @param args		properties object with any titanium view property and some of these custom properties:
 * 					min, max, value, backgroundColor, foregroundColor and height
 * 
 * @return Ti.UI.View with public method updateValue(newValue) to update progressBar value
 */

exports.createProgressBar = function(args){

	var args = args || {};
	args.min = args.min || 0;
	args.max = args.max || 100;
	args.value = args.value || 0;
	args.height = args.height || 2;
	args.backgroundColor = args.backgroundColor || '#000';
	args.foregroundColor =  args.foregroundColor || '#fff';
	
	var mainView = Ti.UI.createView(args);

	var progressView = Ti.UI.createView({
		top:0,
		bottom:0,
		left:0,
		width:'0%',
		//height:args.height,
		backgroundColor: args.foregroundColor 
	})
	
	mainView.add(progressView);
	
	//Public method to redraw a new value.
	//Remember that custom methods in Titanium objects can't start with words 'set' or 'get'
	mainView.updateValue = function(v){
		var newVal = v || 0;
		if(newVal < mainView.min) {newVal = 0};
		if(newVal > mainView.max) {newVal = mainView.max};
		mainView.value = newVal;
		
		var val = ( (mainView.value / (mainView.max - mainView.min)) ) * 100;
		progressView.width = val + '%';	
	}
	
	return mainView;
};


/**
 * FlipImage
 * Returns a view with two sides (imageA and imageB)
 * 
 * @param args		properties object with Titanium View properties and proerpties 'imageA' and 'imageB'
 * 					containing url (local or remote) to the image files.
 * 
 * @return Ti.UI.View with a public method flip() that flips the image and fires event 'flip'
 */

exports.createFlipImage = function(args){
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

/**
 * ImageReflection
 * Returns a view containing an image passed as arguments and its reflection, created by transformations and gradients.
 * Works better in black background.
 * 
 * @param args		properties object with Titanium imageView properties.
 * 
 * @return Ti.UI.View with two public methods: showReflection() and hideReflection();
 */

exports.createImageReflection = function(args){

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
};

/**
 * ImageResizer
 * Returns a resized imageView constrained to a maxWidth and/or maxHeight, taking care the image can be horizontal, vertical or square.
 * 
 * @param media		properties object that must have, at least these properties:
 * 					- image url to rezise (local or remote)
 * 					- height: height in pixels of the image
 * 					- width: in pixels of the image
 * 					- maxWidth: width in which resized image must be constrained
 * 					- maxHeight: height in which resized image must be constrained
 * 
 * 
 * @return Ti.UI.ImageView with a public method: sendMail(args), which saves the image resized and sends it by e-mail
 */

//media will be usually the event.media object returned by openPhotoGallery
//but any image with properties width and height would work
exports.createImageResizer = function(/*media object*/ media) {
	
	var media = media || {};
	
	var tmpImage = Ti.UI.createImageView();
	tmpImage.image = media;
	
	var imgW = media.width || 0;
	var imgH = media.height || 0;
	
	if(!imgW || !imgH){
		Ti.API.error('CAUTION: invalid media size: ' + imgW + ' x ' + imgH);
	}
	
	//default values
	var MAX_WIDTH = media.maxWidth || 400;
	var MAX_HEIGHT = media.maxHeight || 400;
	
	if (imgW > imgH){
		//landscape
		if(imgW > MAX_WIDTH){
			imgH = imgH / (imgW / MAX_WIDTH);
			imgW = MAX_WIDTH;
		}
		if(imgH > MAX_HEIGHT){
			imgW = imgW / (imgH / MAX_HEIGHT);
			imgH = MAX_HEIGHT;
		}	
	}else{
		//portrait or square
		if(imgH > MAX_HEIGHT){
			imgW = imgW / (imgH / MAX_HEIGHT);
			imgH = MAX_HEIGHT;
			
		}
		if(imgW > MAX_WIDTH){
			imgH = imgH / (imgW / MAX_WIDTH);
			imgW = MAX_WIDTH;
		}		
	}
	
	imgW = parseInt(imgW);
	imgH = parseInt(imgH);
	
	tmpImage.width = imgW;
	tmpImage.height = imgH;
	
	media.newWidth = imgW;
	media.newHeight = imgH;
	
	//To review. If image is not saved, there is no was(!?) to attach the image resized (the original will be attached instead)
	tmpImage.sendMail = function(args){
		var args = args || {};
		args.subject = args.subject || '';
		args.attachment = args.attachment || '';
		var filename = Titanium.Filesystem.applicationDataDirectory+Titanium.Filesystem.separator + 'TitanTricks_' + imgW + 'x' + imgH + '.jpg';
		
		var theImage = tmpImage.toImage();
		
		var file = Titanium.Filesystem.getFile(filename);
		file.write(theImage); 
		
		Titanium.Media.saveToPhotoGallery(file, {
			success: function(event){
				var emailDialog = Titanium.UI.createEmailDialog();
				emailDialog.subject = args.subject;
				emailDialog.addAttachment(file);
				emailDialog.open();
			},
			error: function(err){
				var a = Titanium.UI.createAlertDialog({
					title: App.config.name
				});
				a.setMessage('Unexpected error. ' + filename);
				a.show();
			}
		}); 
	};


	return tmpImage; 
	
};

/**
 * JoystickControl
 * Returns a touchable view that works like a joystick with x and y coordinates.
 * 
 * @param args		properties object with position properties (top, left, right, bottom) and color/backgroundColor. Rest of properties are hard-coded.
 * 
 * @return Ti.UI.View that fires a 'move' when joystick is moved
 */

exports.createJoystickControl = function(args) {
	
	var args = args || {};
	
	var view = Ti.UI.createView({
		top: args.top || null,
		left: args.left || null,
		right: args.right || null,
		bottom: args.bottom || null,
		width:100,
		height:100,
		borderRadius:0,
		borderWidth: 1
	}); 

	var joystick = Ti.UI.createView({
		width:40,
		height:40,
		borderRadius:20,
		borderWidth: 0,
		backgroundColor:args.color || '#33f',
		touchEnabled:false,
		opacity:0.8
	}); 

	// circle position before it has been animated
//	var position = { top: circle.top, left: circle.left };

	view.x = 0;
	view.y = 0;
	
	var j_x, j_y;
	
	view.addEventListener('touchmove', function(e){
		
		if(e.x < 0){
			Ti.API.info('negativo')
		}
		
		view.x = e.x > view.width ? view.width: e.x;
		view.x = e.x < 0 ? 0: e.x;
		//view.x = view.x < - view.width / 2 ? view.width / 2 : view.x -  ;
		
		view.y = e.y < 0 ? 0: e.y;
		view.y = e.y > view.height ? view.height: e.y;
		view.y -=view.height / 2;
		
		j_y = view.y < 0 ? view.y - joystick.height / 2 : view.y;
		j_y = view.y < 0 ? view.y - joystick.height / 2 : view.y;
		j_y += view.height / 2;
		
		j_x = view.x < 0 ? view.x + joystick.width / 2 : view.x - joystick.width / 2;
		j_x += view.width / 2;
		
		joystick.animate({
			top: view.y + 50- joystick.height/2, 
			left:view.x+50- joystick.width / 2,
			duration: 1 
		});
		view.fireEvent('move', { x: view.x, y:view.y });
	});
	
	view.addEventListener('touchend', function(e){
		joystick.animate({
			top: view.height/2 - joystick.height/2, 
			left: view.width/2 - joystick.width/2,
			duration: 300 
		});
	});
	view.add(joystick);
	
	return view;
};


/**
 * LongClickButton
 * Returns a button that implements a "lonkclick" event. Default time pressed to fire longclick is 500 ms.
 * 
 * @param args		properties object with Titanium Button properties.
 * 
 * @return Ti.UI.Button that fires a 'lonclick' event when is pressed 500 ms.
 */

exports.createLongClickButton = function(args) {
	
	var defaultDelay = 500; //ms.
	var args = args || {};
	
	if(args.delay === undefined || args.delay < defaultDelay){
		args.delay = defaultDelay;
	}

	var timer = {};
	
	var btn = Titanium.UI.createButton(args);
	 
	btn.addEventListener('touchstart', function(e){
	    timePressed = 0;
	    timer = setInterval(function(){
	        timePressed += 100;
	        if (timePressed >= btn.delay){
	           btn.fireEvent('longclick');
	           clearInterval(timer);
	        }
	    }, 100);
	});
	 
	btn.addEventListener('touchend', function(e){
	    clearInterval(timer);
	});
	
	return btn;
};

/**
 * RowColumn
 * Returns a TableViewRow that automatically creates columns with the 'views' array received as argument
 * 
 * @param args		properties object with Titanium TableViewRow properties and a custom property
 * 					- views: array of views to compose the columns. All columns will have the same width.
 * 					  Array elements can be numbers, strings or any Titanium UI component. Numbers and strings are
 * 					  converted to label component with 'cellStyle' style
 * 					- cellWidth: force a width for all the cells (columns)
 * 					- cellStyle: a properties object with Titanium Label properties. If not defined, LABEL_DEFAULT private var
 * 					  is used as default style.
 * 
 * @return TableViewRow
 */

exports.createRowColumn = function(args){

	var	LABEL_DEFAULT = {
			textAlign:'center', 
			color:'#111', 
			top:0, 
			left:0, 
			right:0, 
			bottom:0, 
			font:{
				fontSize:12, 
				fontWeight:'bold'
			}
		};

	var args = args || {};
	//Property views contains an array of elements to dispose along the row
	args.views = args.views || [];
	var num_cells = args.views.length;
	args.cellWidth = args.cellWidth || Ti.Platform.displayCaps.platformWidth / num_cells - 5;
	args.cellStyle = args.cellStyle || LABEL_DEFAULT;
	
	//The important thing here is the layout:horizontal property
	var row = Ti.UI.createTableViewRow({
		height: args.height || 30,
		left:0,
		right:0,
		top:0,
		layout:'horizontal',
		views: args.views,
		cellWidth:args.cellWidth,
		cellStyle: args.cellStyle
	});

	function createViewCell(comp){
		var v = Ti.UI.createView({
			height: row.height,
			width: args.cellWidth
		});

		if(comp){
			//Ti.API.info(typeof comp + ' = ' + comp.toString());
			if(typeof comp === 'string' || typeof comp === 'number'){
				v.add(Ti.UI.createLabel(App.combine(row.cellStyle, {text:comp})));
			}else{
				v.add(comp);
			}
		}
		
		return v;
	}
	
	row.draw = function(){
		for(var i = 0, j = args.views.length; i < j; i++){
			row.add(createViewCell(args.views[i]));
		}
	}
	
	row.draw();
	
	return row;
};


/**
 * SwitchButton
 * Returns a Button that switches its backgroundImage when clicked
 * 
 * @param args		properties object with Titanium Button properties and these properties:
 * 					- imageOn: image to show when value is true
 * 					- imageOff: image to show when value is false 
 * 					- value: initial status. This property is read only and can be only assigned on object declaration
 * 
 * @return Ti.UI.Button that fires a 'change' event that can be used to know the actual 'value' property
 */

//SwitchButton changes its backgroundImage on each click.
//Looks very nice if using images with transparent backgrounds.
//Be sure both images has the same dimensions and 
//resize button height and width exactly to the image size.

//Fires event 'change' to emulate native switch controls.

exports.createSwitchButton = function(args){

	var args = args || {};
	//ensure value property will exist in btn object
	args.value = args.value || false;
	args.imageOn = args.imageOn || '';
	args.imageOff = args.imageOff || '';
	
	var btn = Ti.UI.createButton(args);
	
	//private method that determines the image for the button
	function setImage(){
		btn.backgroundImage = btn.value ? btn.imageOn : btn.imageOff;
	}
	
	//on click, changes value property, changes image and fires 'change' event
	btn.addEventListener('click', function(){
		btn.value = !btn.value;
		setImage();
		btn.fireEvent('change');
	});
	
	//for initialization
	setImage();
	
	return btn;
};
