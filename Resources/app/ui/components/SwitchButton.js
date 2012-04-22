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

module.exports = function(args){

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
	btn.addEventListener('click', function(e){
		btn.value = !btn.value;
		setImage();
		btn.fireEvent('change', {value: btn.value});
	});
	
	//for initialization
	setImage();
	
	return btn;
};
