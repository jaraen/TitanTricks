

//SwitchButton changes its backgroundImage on each click.
//Looks very nice if using images with transparent backgrounds.
//Be sure both images has the same dimensions and 
//resize button height and width exactly to the image size.

//Fires event 'change' to emulate native switch controls.

TitanTricks.ui.createSwitchButton = {};

(function(){
	
	TitanTricks.ui.createSwitchButton = function(args){

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
	
})();
