const time = new Date().getHours();
let greeting;
if (time >= 0 && time <= 5) {
	greeting = 'HUSTLE TIME';
} else if (time > 5 && time < 12) {
	greeting = 'GOOD MORNING';
} else if (time >= 12 && time < 17) {
	greeting = 'GOOD AFTERNOON';
} else {
	greeting = 'GOOD EVENING';
}
document.getElementById('greet-me').innerHTML = greeting;

function changeImage() {
	var image = document.getElementById('playbutton');
	if (image.src.match('img/plus.svg')) {
		image.src = 'img/minus.svg';
	} else {
		image.src = 'img/plus.svg';
	}
}
