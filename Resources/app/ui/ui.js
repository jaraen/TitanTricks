/**
 * Index for all files on ui folder and App.ui declaration
 */

App.ui = {};

//indexates to components folder
Ti.include('/app/ui/components/components.js');
Ti.include('/app/ui/demos/demos.js');

//ui views and styles
Ti.include(
	'/app/ui/styles.js',
	'/app/ui/ViewTemplateDemo.js',
	'/app/ui/iosToolBar.js',
	'/app/ui/RowIndex.js',
	'/app/ui/WinDemo.js',
	'/app/ui/ViewIndex.js',
	'/app/ui/AppWindow.js'	
);
