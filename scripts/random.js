const randomImages = ["/imgs/random-image/samoyed.jpg", "/imgs/random-image/monolith.jpg", "/imgs/random-image/wojak.gif", "/imgs/random-image/house.jpg", "/imgs/random-image/sam-hyde.jpg", "/imgs/random-image/sam-hyde2.jpg"];
const length = randomImages.length;

function displayRandomImage() {

	let num = Math.floor(Math.random() * (length));
	document.write('<a href="'+randomImages[num]+'" target="_blank">');
	document.write('<img src="'+randomImages[num]+'">');
	document.write('</a>');

}

displayRandomImage();
