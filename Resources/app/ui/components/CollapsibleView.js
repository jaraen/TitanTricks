
/**
 * CollapsibleView
 * Returns a collapsible view with a clickable header, which collapses/expand the view.
 * 
 * @param args		javascript object that should contain a 'header' property (a string or a Ti.UI component) 
 * 					and a 'body' property (the view to show/hide) and any other standard titanium view property.
 * 
 * @return Ti.UI.View with public method collapse(true|false) to collapse/expand the body view
 */

module.exports = function(args){
	
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
		view.fireEvent('collapse', {header: args.title, collapsed:view.collapsed});
		view.collapse(!view.collapsed);
	});
	
	return view;
};
