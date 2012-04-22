
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
		backgroundColor:'#fff',
		width:120,
		height:120,
		//borderRadius:60,
		borderWidth: 1
	}); 

	var joystick = Ti.UI.createView({		//this is the movable view
		width:40,
		height:40,
		borderRadius:20,
		borderWidth: 1,
		backgroundColor:args.color || '#33f',
		touchEnabled:false,
		opacity:0.8
	}); 

	var j_x, j_y;
	
	var halfWidth = view.width / 2;
	var canvasWidth = view.width;
	
	view.addEventListener('touchmove', function(e){
		
		//limit positions to the view bounds
		j_x = e.x > canvasWidth ? canvasWidth: e.x;
		j_x = e.x < 0 ? 0: j_x;
		
		j_y = e.y < 0 ? 0: e.y;
		j_y = e.y > canvasWidth ? canvasWidth: j_y;		

		//move the joystick. Unfortunately, this does not work in android
		//updateLayout() neither seems to work.
		joystick.animate({
			center:{
				y: j_y, 
				x: j_x 
			},
			duration: 1 
		});

		//scale values to [-1, 1] range
		j_x -= halfWidth;
		j_x /= halfWidth;
		j_y -= halfWidth;
		j_y /= halfWidth;		
		
		view.fireEvent('move', { x: j_x, y: -j_y });
	});
	
	view.addEventListener('touchend', function(e){
		joystick.animate({
			center:{
				y: view.height / 2, 
				x: view.width / 2
			},
			duration: 20 
		}, function(){
			view.fireEvent('move', { x: 0, y: 0 });
		});
	});
	
	view.add(joystick);
	
	return view;
};

