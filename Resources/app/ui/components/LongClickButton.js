
/**
 * LongClickButton
 * Returns a button that implements a "lonkclick" event. Default time pressed to fire longclick is 500 ms.
 * 
 * @param args		properties object with Titanium Button properties.
 * 
 * @return Ti.UI.Button that fires a 'lonclick' event when is pressed 500 ms.
 */

module.exports = function(args) {
	
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
	           btn.fireEvent('longclick', {delay: btn.delay});
	           clearInterval(timer);
	        }
	    }, 100);
	});
	 
	btn.addEventListener('touchend', function(e){
	    clearInterval(timer);
	});
	
	return btn;
};