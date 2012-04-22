/**
* Criteria Studio julio 2011
* 
**/

/**
* Criteria Studio julio 2011
* 
**/


/**
 * Open a modal window with a webView inside
 * 
 * @params {
 * 		url: url for the webView
 * 		title: window title
 * }
 */

exports.openUrl = function(args) {

    var modal = Titanium.UI.createWindow({ 
        backgroundColor:'#333',     
        title: args.title,
        barColor:'#333'
    });

    var actInd = Ti.UI.createActivityIndicator();
    modal.add(actInd);
    modal.show();

    var btn = Ti.UI.createButton({
    	title:L('close')
    });
    btn.addEventListener('click', function() {
    	modal.close();
    });		    
    modal.rightNavButton=btn;
	
	var webViewer = Ti.UI.createWebView({
		url: args.url,
		top:0, left:0, right:0,	bottom:0
	});
	modal.add(webViewer);

    modal.open({
		modal: true,
		modalTransitionStyle: Ti.UI.iPhone.MODAL_TRANSITION_STYLE_COVER_VERTICAL,
		modalStyle: Ti.UI.iPhone.MODAL_PRESENTATION_CURRENT_CONTEXT
	});	
	
	webViewer.addEventListener('load', function(){
		actInd.hide();
	});
}

/**
 * Saves an image to device gallery. Please note that args should include ALL the params and that there isn't a strict
 * comprobation of these params, so ensure that all of them exists.
 * 
 * @param {
 * 		filename: file name, without path, for the new file
 * 		image: url of the original image view to be saved
 * 		title: app title (for dialogs titles)
 * 		successMessage: message to show if everything goes right
 * 		errorMessage: message to show it any error occurs
 * 		callback: optional. Function to execute when finish operation
 * } 
 */

exports.savePhoto = function(args){
	
	if (!args) {
		Ti.API.error('Tools module: savePhoto args not defined');
		return;
	}

	var filename = Ti.Filesystem.applicationDataDirectory + Ti.Filesystem.separator + args.filename;
	
	var image = Ti.UI.createImageView({
			image: args.image
	}).toImage();
	
	var file = Titanium.Filesystem.getFile(filename);
	file.write(image); 
	
	Titanium.Media.saveToPhotoGallery(file, {
		success: function(event){
			var a = Titanium.UI.createAlertDialog({
				title: args.title
			});
			a.setMessage(args.successMessage);
			if(args.callback) {
				args.callback();
			}
			a.show();
		},
		error: function(err){
			var a = Titanium.UI.createAlertDialog({
				title: args.title
			});
			a.setMessage(args.errorMessage + filename);
			if(args.callback) {
				args.callback();
			}
			a.show();
		}
	}); 	
};

/**
 * Sends an image by e-mail. Please note that args should include ALL the params and that there isn't a strict
 * comprobation of these params, so ensure that all of them exists.
 * 
 * @param {
 * 		filename: file name, without path, for the new file
 * 		image: url of the original image view to be saved
 * 		title: app title (for dialogs titles)
 * } 
 */
exports.mailPhoto = function(args){
	var filename = Ti.Filesystem.applicationDataDirectory + Ti.Filesystem.separator + args.filename;
	
	var image = Ti.UI.createImageView({
			image: args.image
	}).toBlob();
	

	var emailDialog = Titanium.UI.createEmailDialog()
	emailDialog.subject = args.title;		
	emailDialog.addAttachment(image);
	emailDialog.open();

};

exports.alert = function(/*String*/ _title, /*String*/ _message) {
	Ti.UI.createAlertDialog({
		title:_title, 
		message:_message
	}).show();
};

//Extend an object with the properties from another 
function mixin(/*Object*/ target, /*Object*/ source){
	var name, s, i;
	var empty = {};
	for(name in source){
		s = source[name];
		if(!(name in target) || (target[name] !== s && (!(name in empty) || empty[name] !== s))){
			target[name] = s;
		}
	}
	return target;
};

exports.mixin = function(/*Object*/ obj, /*Object...*/ props){
	if(!obj){ obj = {}; }
	for(var i=1, l=arguments.length; i<l; i++){
		mixin(obj, arguments[i]);
	}
	return obj; // Object
};

//create a new object, combining the properties of the passed objects with the last arguments having
//priority over the first ones
exports.combine = function(/*Object*/ obj, /*Object...*/ props) {
	var newObj = {};
	for(var i=0, l=arguments.length; i<l; i++){
		mixin(newObj, arguments[i]);
	}
	return newObj;
};

//Applies a style to a component
exports.applyStyle = function( _component, _style) {
	var _style = _style || {};
	_component = mixin(_component, _style);
};

//Applies style defined as styleOn or styleOff, according to _value
exports.setStyle = function( _component, _value) {
	//Ti.API.info('setStyle ' + _component.name);
	var _style = {};
	if(_value){
		_style = _component.styleOn;
	}else{
		_style = _component.styleOff;
	}
	_component = mixin(_component, _style);
};

//returns true if value is an Array
exports.isArray = function(value){
	return Object.prototype.toString.apply(value) === '[object Array]';
}	

//OS, Locale, and Density specific branching helpers
var locale = Ti.Platform.locale;
var osname = Ti.Platform.osname;

//Branching logic based on locale
exports.locale = function(/*Object*/ map) {
	var def = map.def||null; 
	if (map[locale]) {
		if (typeof map[locale] == 'function') { return map[locale](); }
		else { return map[locale]; }
	}
	else {
		if (typeof def == 'function') { return def(); }
		else { return def; }
	}
};

//Branching logic based on OS
exports.os = function(/*Object*/ map) {
	var def = map.def||null; //default function or value
	if (typeof map[osname] != 'undefined') {
		if (typeof map[osname] == 'function') { return map[osname](); }
		else { return map[osname]; }
	}
	else {
		if (typeof def == 'function') { return def(); }
		else { return def; }
	}
};

//var landscapeOrientation = (Ti.UI.orientation == Ti.UI.LANDSCAPE_RIGHT || Ti.UI.orientation == Ti.UI.LANDSCAPE_LEFT);

exports.isLandscape = function(){
	return Ti.UI.orientation == Ti.UI.LANDSCAPE_RIGHT || Ti.UI.orientation == Ti.UI.LANDSCAPE_LEFT;						
};	


/*
 * Prototyping some javascript objects
 * 
 */
//trimming space from both side of the string
String.prototype.trim = function() {
	return this.replace(/^\s+|\s+$/g,"");
}
 
//trimming space from left side of the string
String.prototype.ltrim = function() {
	return this.replace(/^\s+/,"");
}
 
//trimming space from right side of the string
String.prototype.rtrim = function() {
	return this.replace(/\s+$/,"");
}
//pads left
String.prototype.lpad = function(padString, length) {
	var str = this;
    while (str.length < length){
        str = padString + str;
    }
    return str;
}
 
//pads right
String.prototype.rpad = function(padString, length) {
	var str = this;
    while (str.length < length){
        str = str + padString;
    }
    return str;
}

String.prototype.reverse = function(){
	return this.split("").reverse().join("");
}
