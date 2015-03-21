//avoid initial slash in paths under mobileweb platform
var sep = Ti.Filesystem.separator;
var firstSeparator = (Ti.Platform.name === 'mobileweb') ? '' : sep;

var ui = firstSeparator + 'app' + sep + 'ui' + sep;
var libs = firstSeparator + 'app' + sep + 'lib' + sep;

module.exports = {
	TABGROUP : ui + 'TabGroup',
	QUESTION : ui + 'questionTab',
	POINTS : ui + 'pointsTab',

	STYLES : ui + 'Styles',
	TOOLS : firstSeparator + 'app' + sep + 'Tools',
	SPINNER : libs + 'spinner',
	
	IMAGES : firstSeparator + 'imgs' + sep
};
