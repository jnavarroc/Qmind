var Mods = require('ModulePaths');
//load module paths

var WindowQ = require(Mods.QUESTION),
    WindowS = require(Mods.POINTS);

module.exports = function(_args) {

	var tabGroup = Ti.UI.createTabGroup();

	var winQ = new WindowQ();

	var winS = new WindowS();

	var tabQ = Ti.UI.createTab({
		window : winQ,
		title : 'Question',
		icon : Mods.IMAGES + 'UI_bulb.png',
		backgroundColor : '#93caed'
	});

	var tabS = Ti.UI.createTab({
		window : winS,
		title : 'Status',
		icon : Mods.IMAGES + 'UI_trophy.png'
	});

	tabGroup.addTab(tabQ);
	tabGroup.addTab(tabS);

	tabQ.addEventListener('click', function(e) {
		winQ.refreshQuestion();
	});

	tabS.addEventListener('click', function(e) {
		winS.refreshPoints();
	});

	return tabGroup;
};

