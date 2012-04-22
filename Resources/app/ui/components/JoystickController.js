
/**
 * JoystickControl
 * Returns a touchable view that works like a joystick with x and y coordinates.
 * 
 * @param args		properties object with position properties (top, left, right, bottom) and color/backgroundColor. Rest of properties are hard-coded.
 * 
 * @return Ti.UI.View that fires a 'move' when joystick is moved
 */

module.exports = function(args) {
	
	var args = args || {};
	
	var view = Ti.UI.createView({		//this is the touchable container view for the joystick
		top: args.top || null,
		left: args.left || null,
		right: args.right || null,
		bottom: args.bottom || null,
		width:100,
		height:100,
		borderRadius:0,
		borderWidth: 1
	}); 

	var joystick = Ti.UI.createView({		//this is the movable view
		width:40,
		height:40,
		borderRadius:20,
		borderWidth: 0,
		backgroundColor:args.color || '#33f',
		touchEnabled:false,
		opacity:0.8
	}); 

	// circle position before animate
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
		//view.y -=view.height / 2;
		
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

