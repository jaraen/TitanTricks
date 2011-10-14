/**
* Criteria Studio julio 2011
* 
**/

//All application functionality is namespaced here
var tools = {};

(function(){
	//Extend an object with the properties from another 
	var empty = {};
	function mixin(/*Object*/ target, /*Object*/ source){
		var name, s, i;
		for(name in source){
			s = source[name];
			if(!(name in target) || (target[name] !== s && (!(name in empty) || empty[name] !== s))){
				target[name] = s;
			}
		}
		return target; // Object
	};
	
	tools.mixin = function(/*Object*/ obj, /*Object...*/ props){
		if(!obj){ obj = {}; }
		for(var i=1, l=arguments.length; i<l; i++){
			mixin(obj, arguments[i]);
		}
		return obj; // Object
	};
	
	//create a new object, combining the properties of the passed objects with the last arguments having
	//priority over the first ones
	tools.combine = function(/*Object*/ obj, /*Object...*/ props) {
		var newObj = {};
		for(var i=0, l=arguments.length; i<l; i++){
			mixin(newObj, arguments[i]);
		}
		return newObj;
	};
	
	
	//Applies style defined as styleOn or styleOff, according to _value
	tools.applyStyle = function(_control, _style) {
		var _style = _style || {};
		_control = mixin(_control, _style);
	};
	
	
	//detects if value is an Array
	tools.isArray = function(value){
		return Object.prototype.toString.apply(value) === '[object Array]';
	}	
	
	//OS, Locale, and Density specific branching helpers
	var locale = Ti.Platform.locale;
	var osname = Ti.Platform.osname;

	/*
		Branching logic based on locale
	*/
	tools.locale = function(/*Object*/ map) {
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

	/*
		Branching logic based on OS
	*/
	tools.os = function(/*Object*/ map) {
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
			
})();
