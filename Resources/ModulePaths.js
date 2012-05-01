
var ui = '/app/ui/';
var components = '/app/ui/components/';

var o = {
	//App components
	APPWINDOW: ui + 'AppWindow',
	INDEXVIEW: ui + 'IndexView',
	INDEXROWVIEW: ui + 'IndexRowView',	
	DEMOWIN: ui + 'DemoWin',
	TEMPLATEDEMO: ui + 'TemplateDemoView',
	
	//Others
	TOOLS: '/app/Tools',
	STYLES: ui + 'Styles',
	
	//Demos "proxy"
	DEMOSLIST: ui + 'demos/demos',
	
	//Reusable components
	BADGEIMAGE: components + 'BadgeImage',
	COLLAPSIBLEVIEW: components + 'CollapsibleView',
	FLIPIMAGE: components + 'FlipImage',
	IMAGERESIZER: components + 'ImageResizer',
	JOYSTICK: components + 'JoystickController',
	LONGCLICKBUTTON: components + 'LongClickButton',
	PROGRESSBAR: components + 'ProgressBar',
	REFLECTIMAGE: components + 'ReflectImage',
	ROWCOLUMNVIEW: components + 'RowColumnView',
	SWITCHBUTTON: components + 'SwitchButton'
};


module.exports = o;