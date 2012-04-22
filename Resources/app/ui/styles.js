
var Mods = require('/ModulePaths');

var Tools = require(Mods.TOOLS);

var sep = Ti.Filesystem.separator;
var resPath = Ti.Filesystem.resourcesDirectory;
var imgsPath =  sep + 'imgs' + sep;
	
module.exports = {
	
	APP_WINDOW:{
		navBarHidden:false,
		top:0, left:0, right:0, bottom:0,
		backgroundImage : Tools.os({
			android:null,
			def:imgsPath + 'bg.png'
		}),
		backgroundColor:'#333',
		exitOnClose:true
	},
	
	WINDOW_DEMO:{
		navBarHidden:false,
		top:0, left:0, right:0, bottom:0,
		backgroundColor: '#ddd'
	},
	
	FULL_VIEW: {
		top:0, left:0, right:0, bottom:0
	},
	
	SCROLLDEMO_VIEW: {
		top:0,
		left:0,
		right:0,
		bottom:0,
		contentHeight:'auto',
		contentWidth:'auto'
	},
	
	VIEW_DEMO: {
		top:0,
		left:0, right:0, 
		height:Tools.os({
			android:null,
			iphone:Ti.UI.SIZE
		}),
		layout:'vertical',
		backgroundColor:'#ddd'
	},
	
	ROW_DEMO: {
		left:0,
		rigth:0,
		height:65,
		backgroundColor:'#fff',
		className: 'rowDemo'
	},
	
	LABEL_TITLE: {
		color:'#576996',
		font:{fontSize:16,fontWeight:'bold'},
		left:10,
		right:10,
		top:10,
		height:Ti.UI.SIZE,
		textAlign:'left'
	},
	
	LABEL_DESC: {
		color:'#333',
		font:{fontSize:13,fontWeight:'normal'},
		left:20,
		right:10,
		top:10,
		height:Ti.UI.SIZE,
		textAlign:'left',
	},
	
	LABEL_TITLE_ROW: {
		color:'#576996',
		font:{fontSize:16,fontWeight:'bold'},
		left:10,
		right:10,
		top:8,
		height:Ti.UI.SIZE,
		textAlign:'left'
	},
	
	LABEL_DESC_ROW: {
		color:'#333',
		font:{fontSize:13,fontWeight:'normal'},
		left:20,
		right:10,
		top:28,
		height:Ti.UI.SIZE,
		textAlign:'left',
	},
	
	LOGO_IOS_ROW: {
		image: imgsPath + 'ios.png',
		width:16,
		height:16,
		right:5,
		top:8
	},
	
	LOGO_ANDROID_ROW: {
		image: imgsPath + 'android.png',
		width:16,
		height:16,
		right:25,
		top:9
	},
	
	ACTIVITY_INDICATOR: {
		top:140, 
		height:80,
		width:200,
		zIndex:10,
		message:'Loading...',
		style:Titanium.UI.iPhone.ActivityIndicatorStyle.BIG
	}
};
