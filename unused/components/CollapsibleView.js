//
// Creates and return a collapsible view.
// CollapsibleView
//
// Has to receive an args object with at least two properties.
// - header: the header UI control. If is a string, is converted to a label component. This is the clickable part
// - body: any ui control (usually a view with components inside). This is the collapsible part.
//  Both components must have an height property to collapse the component correctly.
//
// - collapsed: indicates if view must initiate collabsed or not. Can only be set in declaration. After creation, is read only.
// Use these methods to modify collapse status programmatically:
//
// - collapse(true||false)
// 
// yes, I know, would be better use setCollapsed(), but titanium does not allow implement methods in their objects that start with 'get' nor 'set'
//
// Events:
//
// fires event 'collapse' when status changes. Look event.source.collapsed to know the new status of the view (true||false)

TitanTricks.ui.createCollapsibleView = {};

(function(){
	
	TitanTricks.ui.createCollapsibleView = function(args){
		
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
	}
	
})();
