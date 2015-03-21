var Mods = require('ModulePaths'),
    Tools = require(Mods.TOOLS),
    $$ = require(Mods.STYLES);

module.exports = function() {

	var win = Ti.UI.createWindow({
		backgroundColor : '#277591',
		title : 'Status',
		layout : 'vertical'
	});

	var titulo = Ti.UI.createLabel(Tools.combine($$.Label, {
		text : 'Recuento de puntos:',
		color : '#fff',
		top : 20,
		width : Ti.UI.FILL
	}));
	win.add(titulo);

	var contenido = Ti.UI.createLabel(Tools.combine($$.Label, {
		text : 'Puntos',
		color : '#fff',
		top : 20,
		width : Ti.UI.FILL
	}));
	win.add(contenido);

	var puntos = 0,
		response = '--No USER--';

	var refreshPoints = function() {
		var connectReq = Titanium.Network.createHTTPClient();
		var xmlFile = '',
		    miHash = '1234';
		var url = 'http://dsred.net/ws/login2.php',
		    params = {
			hash : miHash
		};

		connectReq.open("POST", url);
		connectReq.onload = function() {
			if (this.status == '200') {
				xmlFile = this.responseText;

				if (xmlFile) {
					var xmlObj = Ti.XML.parseString(xmlFile);
					response = xmlObj.getElementsByTagName('user').item(0).textContent;
				}
			}
			contenido.text = 'El usuario ' + response + ' ha obtenido ' + puntos + ' puntos.';
		};
		connectReq.send(params);
	};

	win.refreshPoints = refreshPoints;

	return win;

};
