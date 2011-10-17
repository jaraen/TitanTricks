
App.ui.demos = {};

//Array used by ViewIndex.js to fill the index table view.
//This array is filled by each demo file when is included, so there is no need to maintain
//an array declaration with all samples.

App.ui.demos.list = [];

//UI Demos
Ti.include(
	'/app/ui/demos/ViewSwitchButton.js',
	'/app/ui/demos/ViewLongClick.js',
	'/app/ui/demos/ViewCustomProgressBar.js',
	'/app/ui/demos/ViewFlipImage.js',
	'/app/ui/demos/ViewBadgeImage.js',
	'/app/ui/demos/ViewImageReflection.js',
	'/app/ui/demos/ViewImageResizer.js',
	'/app/ui/demos/ViewTableMultiColumns1.js',
	'/app/ui/demos/ViewTableMultiColumns2.js',
	'/app/ui/demos/ViewCollapsibleView.js'
);

//Network demos
/*Ti.include(
	'/app/ui/demos/ViewBasicServer.js'
);*/