function leftImg() {
	var image = document.getElementById("imagedisplayed").src;
	var imgchar = image.charAt(image.length - 5);
	var imgnum = parseInt(imgchar);

	imgnum--;
	if (imgnum < 1) {
		imgnum = 7;
	}

    document.getElementById("imagedisplayed").src = "images/placeholder.png";
	document.getElementById("imagedisplayed").src = "images/gallery/" + imgnum + ".png";
}

function rightImg() {
	var image = document.getElementById("imagedisplayed").src;
	var imgchar = image.charAt(image.length - 5);
	var imgnum = parseInt(imgchar);

	imgnum++;
	if (imgnum > 7) {
		imgnum = 1;
	}

    document.getElementById("imagedisplayed").src = "images/placeholder.png";
	document.getElementById("imagedisplayed").src = "images/gallery/" + imgnum + ".png";
}