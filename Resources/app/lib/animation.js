/**
 * @author Javier Navarro
 * Animation.start()
 * Animation.stop()
 */

function Animation() {
	//create 
	var sprite = Ti.UI.createImageView({
		images : ['img1.png', 'img2.png', 'img3.png'],
		duration : 75, // milliseconds for each frame to show
		repeatCount : 0, // number of times the animation will repeat. 0 is indefinitely
		width : 40,
		height : 40,
	});

	return sprite;
}

module.exports = Animation;
