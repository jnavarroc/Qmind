var Mods = require('ModulePaths'),
    Tools = require(Mods.TOOLS);

var theme = {
	textColor : '#000000',
	grayTextColor : '#888888',
	headerColor : '#333333',
	lightBlue : '#006cb1',
	darkBlue : '#93caed',
	fontFamily : Tools.os({
		iphone : 'Helvetica Neue',
		android : 'Droid Sans'
	})
};

//All shared property sets are declared here.
module.exports = {
	//grab platform dimensions only once to save a trip over the bridge
	platformWidth : Ti.Platform.displayCaps.platformWidth,
	platformHeight : Ti.Platform.displayCaps.platformHeight,

	//we use these for default components
	APP_WINDOW : {
		navBarHidden : false,
		top : 0,
		left : 0,
		right : 0,
		bottom : 0,
		backgroundImage : Tools.os({
			android : null,
			def : Mods.IMAGES + 'bg.png'
		}),
		backgroundColor : '#333',
		exitOnClose : true
	},

	Button : {
		height : 50,
		width : 250,
		color : '#000',
		font : {
			fontSize : 18,
			fontWeight : 'bold'
		}
	},

	Label : {
		//color:theme.textColor,
		font : {
			fontFamily : theme.fontFamily,
			fontSize : 24,
			fontWeight : 'bold'
		},
		height : 'auto',
		shadowColor : '#999',
		shadowOffset : {
			x : 1,
			y : 1
		},
		color : '#fff',
		borderRadius : 5,
		backgroundColor : '#ddd',
		textAlign : 'center'
	},

	questionLabel : {
		//color:theme.textColor,
		font : {
			fontFamily : theme.fontFamily,
			fontSize : 24,
			fontWeight : 'bold'
		},
		height : 'auto',
		shadowColor : '#999',
		shadowOffset : {
			x : 1,
			y : 1
		},
		color : '#277591',
		borderRadius : 5,
		backgroundColor : '#efcd70',
		textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER
	},

	answerLabel : {
		//color:theme.textColor,
		font : {
			fontFamily : theme.fontFamily,
			fontSize : 18,
			fontWeight : 'bold'
		},
		height : 'auto',
		shadowColor : '#999',
		shadowOffset : {
			x : 1,
			y : 1
		},
		color : '#000',
		borderRadius : 5,
		backgroundColor : '#fbdcc3',
		textAlign : Ti.UI.TEXT_ALIGNMENT_LEFT
	},

	GradientRow : {
		height : '40',
		selectedColor : '#333333',
		backgroundSelectedColor : '#aaaaaa',
		selectedBackgroundColor : '#aaaaaa',
		backgroundGradient : {
			type : 'linear',
			colors : [{
				color : '#666666',
				position : 0.0
			}, {
				color : '#999999',
				position : 0.40
			}, {
				color : '#333333',
				position : 1.0
			}]
		}
	},
	Window : {
		navBarHidden : true,
		softInputMode : (Ti.UI.Android) ? Ti.UI.Android.SOFT_INPUT_ADJUST_RESIZE : ''
	},

	TextField : {
		height : 55,
		borderStyle : Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
		color : '#000000'
	},

	TextArea : {
		borderRadius : 10,
		backgroundColor : '#efefef',
		//gradient will only work on iOS
		backgroundGradient : {
			type : 'linear',
			colors : [{
				color : '#efefef',
				position : 0.0
			}, {
				color : '#cdcdcd',
				position : 0.50
			}, {
				color : '#efefef',
				position : 1.0
			}]
		}
	},

	//we use these as JS-based 'style classes'
	animationDuration : 500,
	stretch : {
		top : 0,
		bottom : 0,
		left : 0,
		right : 0
	}
};
