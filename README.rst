TitanTricks Readme
==================

TitanTricks is Titanium Mobile project, full of reusable code samples and tricks
with a didactic aim, oriented to begginers and intermediate level users.

Is compatible with android and iOS, but some samples only work on iOS (indicated on each case).

The project itself aims to be an example of how to structure a titanium project and how to work with JavaScript
using basic technics and principles.

Component oriented
==================
TitanTricks uses the "factory" JavaScript pattern everywhere. Thanks to this, there is no need to use the "new"
JavaScript constructor keyword (an interesting discussion about the "new" JavaScript keyword can be found in Douglas 
Crockford literature).

Specific app components are defined inside 'app' folder, using one js file for each component (AppWindow, WinDemo...)

Reusable components are now in commonJS modules, under 'modules' folder. At this time, one module TitanTricksUIComponents.js
is available. Even inside the commonJS module, the factory patter is used, with public methods such as createLongClickButton()
or createCollapsible()

All TitanTricks components can be easily reused. Copy and paste 'modules' folder and require() them. Since TitanTricks modules
are organized in types (UI, network, data...), you may want to load in properties of a global object. Note that, at this time,
TitanTricks only provides UI components, but this may change in future :)

::

  var TitanTricks = {}:
  TitanTricks.ui = require('/modules/TitanTricksUIComponents');
  
  var btn = TitanTricks.ui.createLonkClickButton({title:'here we go!'});



Style
=====
TitanTricks is built following the "Tweetanium style", but a little bit more strict in declarations. 

Each file includes in its first lines the public methods implemented in that file, so is easier to find
public method declarations. For example:

::

  //declare all public methods of this file before start coding.
  //JSlint friendly :)
  App.ui.createWinDemo = {};

  (function(){
  	App.ui.createWinDemo = function(args){
  		[...]		
  	};
  })();

Each folder in the structure (config, model, ui and demos) has a file wich includes the files contained in this folder, like an index file.

Look inside ui.js to have an idea.


Global Vars:
============

The project has 4 custom global vars:

1. App:
The namespace containing all app methods, with 3 main properties:
 - App.config
 - App.model
 - App.ui

Each one of this properties has a corresponding folder inside /app/ folder.

2. $$:
is an alias for App.ui.properties, created in ui/styles.js file (like tweetanium does). 

3. TitanTricks:
All components included in commonJS modules are created under this namespace (TitanTricks.ui.*). 
I decided to create a diferent namespace to facilitate reusing code. Copy and paste modules folder
in your project and start reusing demo code.

4. tools:
tools.js is a common file I usually use in my projects. The code comes mainly from tweetanium project (thank you guys!)
and also has some string functions prototiped I miss from other languages.
The only place where I use tools as a global var is in TitanTricks.js to add all the functionality from tools to App object
using the mixin method (declared in tools.js).

CommonJS modules?
================
CommonJS modules is now supported for reusable components. But please note that does not work on Android and SDK 1.7.3. (but works fine with 1.7.1). 

If you don't know how to use commonJS modules on Titanium, these two reads will help a lot:

http://wiki.appcelerator.org/display/guides/CommonJS+in+Titanium
http://wiki.appcelerator.org/display/guides/Mobile+Best+Practices

Right now there is a big module file with all components (TitanTricksUIComponents.js), but I'll probably split it in several files, 
one for each component.

Collaboration
=============
TitanTricks is open for collaboration. You can reuse code, modify or extend in any way.


HOW TO ADD DEMOS
================

All demo views are in app/ui/demos

Custom components are in modules/

--> You don't have to change any file outside the demo modules to add a new demo! <--

Before be shown to the user, demos are built inside ViewTemplateDemo.js and WinDemo.js, wich are a template 
with the toolbar (ios), title, descriptions and so on, in a vertical layout. Demos are launched from main index 
tableview (in ViewIndex.js)

Each ViewDemo in demos/ folder returns a view that is built inside the demos template automatically.

To add a new demo, create a new ViewDemo and include it in /app/ui/demos/demos.js.

Each ViewDemo has a private var called "demoInfo", with info about the demo and a "createView" interface property to 
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
		android:	false,
		createView:	App.ui.demos.createViewImageReflection //IMPORTANT: Be sure you update this line with your own method.
	}

Appart of the demo folder, you may want to add some new components to the app. Please, add the components files inside commonJS modules, in
modules folder.
	
and code strong!

CREDITS
=======

Author: Javier Rayon, 2011

Contact: javier at criteriastudio dot com

GitHub Repo: https://github.com/jaraen

Appcelerator DevLink: http://developer.appcelerator.com/devlink/profile/1190171/javier-rayon



