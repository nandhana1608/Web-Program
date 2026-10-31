
var images = [
    "image1.avif",
    "image2.jpeg",
    "image4.jpeg"
];

var i = 0;

function next() {
    i++;

    if (i >= images.length) {
        i = 0;
    }

    document.getElementById("slide").src = images[i];
}

function previous() {
    i--;

    if (i < 0) {
        i = images.length - 1;
    }

    document.getElementById("slide").src = images[i];
}
