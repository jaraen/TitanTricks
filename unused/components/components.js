

var TitanTricks = {};

TitanTricks.ui = {};
TitanTricks.network = {};

TitanTricks.path = '/app/ui/components/';

Ti.include(
	TitanTricks.path + 'LongClickButton.js',
	TitanTricks.path + 'ImageReflection.js',
	TitanTricks.path + 'CustomProgressBar.js',
	TitanTricks.path + 'FlipImage.js',
	TitanTricks.path + 'BadgeImage.js',
	TitanTricks.path + 'RowColumn.js',
	TitanTricks.path + 'SwitchButton.js',
	TitanTricks.path + 'ImageResizer.js',
	TitanTricks.path + 'CollapsibleView.js'
);

Ti.include(
//	TitanTricks.path + 'BasicTCPServer.js'
);
