var Mods = require('ModulePaths'),
    Tools = require(Mods.TOOLS),
    $$ = require(Mods.STYLES);

module.exports = function() {

	var win = Ti.UI.createWindow({
		backgroundColor : '#3e91af',
		title : 'Questions',
		layout : 'vertical'
	});
	var nextItemPos = 10;
	var pregunta = Ti.UI.createLabel(Tools.combine($$.questionLabel, {
		text : 'Question',
		top : nextItemPos,
		width : Ti.UI.FILL
	}));
	win.add(pregunta);

	var respuestaA = Ti.UI.createLabel(Tools.combine($$.answerLabel, {
		text : 'A',
		top : nextItemPos,
		left : 30,
		width : Ti.UI.FILL
	}));
	win.add(respuestaA);

	var respuestaB = Ti.UI.createLabel(Tools.combine($$.answerLabel, {
		text : 'B',
		top : nextItemPos,
		left : 30,
		width : Ti.UI.FILL
	}));
	win.add(respuestaB);

	var respuestaC = Ti.UI.createLabel(Tools.combine($$.answerLabel, {
		text : 'C',
		top : nextItemPos,
		left : 30,
		width : Ti.UI.FILL
	}));
	win.add(respuestaC);

	var nuevaPregunta = true;

	var refreshQuestion = function() {
		var connectReq = Titanium.Network.createHTTPClient();
		var xmlQuestion = '',
		    response = '--No USER--',
		    miHash = '1234';
		var url = 'http://dsred.net/ws/login2.php',
		    params = {
			hash : miHash
		};

		connectReq.open("POST", url);
		connectReq.onload = function() {
			if (this.status == '200') {
				xmlQuestion = this.responseText;
				if (xmlQuestion) {
					var xmlObj = Ti.XML.parseString(xmlQuestion);
					if (xmlObj.getElementsByTagName('Questions').item(0).textContent) {
						pregunta.text = '¿' + xmlObj.getElementsByTagName('Question').item(0).textContent + '?';
						respuestaA.text = xmlObj.getElementsByTagName('Answer1').item(0).textContent;
						respuestaB.text = xmlObj.getElementsByTagName('Answer2').item(0).textContent;
						respuestaC.text = xmlObj.getElementsByTagName('Answer3').item(0).textContent;

					} else {
						pregunta.text = 'Se acabaron las preguntas. Gracias por jugar a este entretenido pasatiempos.';
						respuestaA.text = '';
						respuestaB.text = '';
						respuestaC.text = '';
					}
				}
			}
		};
		connectReq.send(params);
	};

	win.refreshQuestion = refreshQuestion;
	
	//Actualizamos pregunta la primera vez
	refreshQuestion();
	
	return win;

};
