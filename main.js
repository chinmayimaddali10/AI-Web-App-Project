var song = "";
var song1 = "";

function preload() {
    song = loadSound("Imagine Dragons - Believer.mp3");
    song1 = loadSound("Music.mp3");

}

function setup() {
    canvas = createCanvas(500, 500);
    canvas.center();
    video = createCapture(450, 450);
    video.hide();
}

function draw() {
    image(video, 25, 25, 450, 450);
}