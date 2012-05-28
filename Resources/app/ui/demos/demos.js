
//UI Demos
var demosToRequire = [
	'/app/ui/demos/ViewSwitchButton',
	'/app/ui/demos/ViewLongClick',
	'/app/ui/demos/ViewCustomProgressBar',
	'/app/ui/demos/ViewJoystick',
	'/app/ui/demos/ViewFlipImage',
	'/app/ui/demos/ViewBadgeImage',
	'/app/ui/demos/ViewImageReflection',
	'/app/ui/demos/ViewImageResizer',
	'/app/ui/demos/ViewTableMultiColumns1',
	'/app/ui/demos/ViewTableMultiColumns2',
	'/app/ui/demos/ViewCollapsibleView',
	'/app/ui/demos/ViewAbout'
];


var demosList = [];

//require all, so they can update the demosList by theirselves

for(var i = 0, j = demosToRequire.length; i < j; i++){
	demosList.push(require(demosToRequire[i]));	
}

exports.list = demosList;

