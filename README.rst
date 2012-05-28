TitanTricks Readme
==================

TitanTricks is Titanium Mobile project, full of reusable code samples and tricks
with a didactic aim, oriented to begginers and intermediate level users.

Is compatible with android and iOS, but some samples only work on iOS (indicated on each case).

The project itself aims to be an example of how to structure a titanium project and how to work with JavaScript
using basic technics and principles.

There is a mobile web version of this project [here](https://github.com/jaraen/TitanTricksMobileWeb)

Component oriented
==================
TitanTricks has been completely refactored to commonJS modules, following Appcelerator guidelines.

Specific app components are defined inside 'app' folder, using one js file for each component (AppWindow, DemoWin, IndexView...)

Also, reusable components are now commonJS modules, under 'app/ui/components' folder. 

All TitanTricks components can be easily reused. Copy and paste 'components' folder and require() them in your project.


Coding style and commonJS modules
=================================
All path to commonJS modules are declared in module ModulePaths.js, so there's no need to use 
paths in the project (except for the path to ModulesPath.js file):

::

	var Mods = require('/ModulePaths');
	
	//all the app modules are declared as constants inside a module
	var IndexView = require(Mods.INDEXVIEW),
		Tools = require(Mods.TOOLS),
		$$ = require(Mods.STYLES);
	
	module.exports = function() {
		var win = Ti.UI.createWindow ($$.APP_WINDOW);
		...
	}


Also the common styles for the app are defined in Styles.js file, and commonly assigned to $$ var, as a reminiscence of the tweetanium app.
Specific styles for some demos are declared inside each demo view.

Tools.js file includes some useful and reusable functions and is required all along the project.

For more info about how to use commonJS modules on Titanium, these two reads will help a lot:

http://wiki.appcelerator.org/display/guides/CommonJS+in+Titanium

http://wiki.appcelerator.org/display/guides/Mobile+Best+Practices

Global Vars:
============
Global what? :)

There's no need for global vars using CommonJS modules. Even the code in app.js has been involved in an anonymous javascript function
to avoid pollute the global scope. 

::

	(function(){
		
		var Mods = require('/ModulePaths');
		
		var AppWindow = require(Mods.APPWINDOW);
		
		var appWin = new AppWindow();
		
		appWin.open();
	
	})();
	
	//no global vars here!



Collaboration
=============
TitanTricks is open for collaboration. You can reuse code, modify or extend in any way.


How to add demos
================

All demo views are in app/ui/demos

Custom components are in app/ui/components/

Before be shown to the user, demos are built inside ViewTemplateDemo.js and WinDemo.js, which are a template 
with a title, descriptions and so on, in a vertical layout. Demos are launched from main index 
tableview (in IndeView.js)

Each ViewDemo in demos/ folder returns a view that is built inside the demos template automatically.

To add a new demo, create a new ViewDemo module and include it in /app/ui/demos/demos.js.

Each ViewDemo has a  var called "demoInfo", with info about the demo and a "createView" interface property to 
launch the demo from the index table.

::

	//Standard demo declaration used along TitanTricks App to reference each demo.
	var demoInfo = {
		title:	'Image reflection',
		description: 	'Creates an image with its own reflection',
		instructions: 	'Click the image to show/hide its reflection. Only works on iOs.',
		component:	'ImageReflection',
		header:	'UI',
		ios:	true,
		android:	false
	}
	
	demoInfo.createView = function(){
		var view = new DemoTemplateView(demoInfo);
	
		//implement here your demo and build over the view component
		...		
		return view;
	};
	
	module.exports = demoInfo; //make it public


Appart of the demo folder, you may want to add some new components to the app. Add your custom components inside components folder.
	
Code strong!

Credits
=======

Author: Javier Rayon, 2011

Contact: javier at criteriastudio dot com

GitHub Repo: https://github.com/jaraen

Appcelerator DevLink: http://developer.appcelerator.com/devlink/profile/1190171/javier-rayon



