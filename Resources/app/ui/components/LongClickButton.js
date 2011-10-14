
TitanTricks.ui.createLongClickButton = {};

(function(){
	
	TitanTricks.ui.createLongClickButton = function(args) {
		
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
		        if (timePressed > btn.delay){
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

	
})();

