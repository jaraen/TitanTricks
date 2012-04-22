/**
 * ProgressBar
 * Returns a customizable progress bar
 * 
 * @param args		properties object with any titanium view property and some of these custom properties:
 * 					min, max, value, backgroundColor, foregroundColor and height
 * 
 * @return Ti.UI.View with public method updateValue(newValue) to update progressBar value
 */

module.exports = function(args){

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
	mainView.SetValue = function(v){
		var newVal = v || 0;

		if(newVal < mainView.min) {newVal = 0};
		if(newVal > mainView.max) {newVal = mainView.max};

		mainView.value = newVal;

		var val = ( (mainView.value / (mainView.max - mainView.min)) ) * 100;

		progressView.width = val + '%';	
	}
	
	return mainView;
};