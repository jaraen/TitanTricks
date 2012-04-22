/**
 * TitanTricks app 
 * @version      0.3
 * @author       Javier Rayon, 2011. Criteria Studio.
 */


(function(){
	
	var Mods = require('/ModulePaths');
	
	var	AppWindow = require(Mods.APPWINDOW);
	
	var appWin = new AppWindow();
	
	appWin.open();
	
})();

	
	
/*Ti.UI.setBackgroundColor('#eee');

	
	var l = Ti.UI.createLabel({text:'hola', width:300, height:300, backgroundColor:'blue'});
	
	var w = Ti.UI.createWindow();
	
	w.add(l);
	
	w.open();
*/
