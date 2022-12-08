/* eslint-disable no-undef, no-unused-vars */
let wetMix,
  distortion,
  roomSlider,
  pitch,
  button1,
  button2,
  button3,
  button4,
  button5,
  button6,
  button7,
  button8;

const delay = new Tone.FeedbackDelay(0.5, 0.5).toDestination();
const distort = new Tone.Distortion(1.0).connect(delay);
const shifter = new Tone.PitchShift(2).connect(distort);
const reverb = new Tone.JCReverb({ roomSize: 0.8, wet: 1.0 }).connect(shifter);

const multiplayer = new Tone.Players({
  drums: "Media/Toms.wav",
  guitar: "Media/guitar.wav",
  sax: "Media/sax.wav",
  Bass: "Media/Bass.wav",
  trumpet: "Media/trumpet.wav",
  piano: "Media/piano.wav",
  bell: "Media/bell.wav",
  cymbal: "Media/cymbal.wav"
}).connect(reverb);

function setup() {
  createCanvas(windowWidth, windowHeight);

  wetMix = createSlider(0, 1, 1, 0);
  wetMix.style("width", "200px");
  wetMix.position(width / 5 - 100, height / 15 + 60);

  distortion = createSlider(0, 1, 1, 0);
  distortion.style("width", "200px");
  distortion.position(width / 5 - 100, height / 2 + 10);

  pitch = createSlider(-12, 12, 2, 1);
  pitch.style("width", "200px");
  pitch.position(width / 5 + 300, height / 15 + 60);

  roomSlider = createSlider(0, 1, 0.5, 0);
  roomSlider.style("width", "200px");
  roomSlider.position(width / 5 + 300, height / 2 + 10);

  button1 = createButton("Drums");
  button1.position(width / 20 + 250, 15);
  button1.mousePressed(play1);

  button2 = createButton("guitar");
  button2.position(width / 20 + 250, 15 + 30);
  button2.mousePressed(play2);

  button3 = createButton("sax");
  button3.position(width / 20 + 250, 15 + 60);
  button3.mousePressed(play3);

  button4 = createButton("Bass");
  button4.position(width / 20 + 250, 15 + 90);
  button4.mousePressed(play4);

  button5 = createButton("trumpet");
  button5.position(width / 20 + 250, 15 + 120);
  button5.mousePressed(play5);

  button6 = createButton("piano");
  button6.position(width / 20 + 250, 15 + 150);
  button6.mousePressed(play6);

  button7 = createButton("bell");
  button7.position(width / 20 + 250, 15 + 180);
  button7.mousePressed(play7);

  button8 = createButton("cymbal");
  button8.position(width / 20 + 250, 15 + 210);
  button8.mousePressed(play8);
}

function draw() {
  delay.wet.value = wetMix.value();
  background(200);
  textSize(20);
  fill("black");
  textAlign(CENTER);
  text("Delay", width / 5, height / 25 + 50);

  textSize(10);
  fill("black");
  textAlign(CENTER);
  text(
    int(wetMix.value() * 100) + "% effected sound",
    width / 5,
    height / 15 + 60
  );
  delay.wet.value = wetMix.value();
  distort.distortion = distortion.value();
  shifter.pitch = pitch.value();
  reverb.roomSize.value = roomSlider.value();

  textSize(10);
  fill("black");
  textAlign(CENTER);
  text("Pitch Shifting in Half Steps", width / 5 + 400, height / 15 + 55);

  textSize(20);
  fill("black");
  textAlign(CENTER);
  text("Pitch", width / 5 + 400, height / 15 + 40);

  textSize(20);
  fill("black");
  textAlign(CENTER);
  text("Distortion", width / 5, height / 2 - 5);

  textSize(10);
  fill("black");
  textAlign(CENTER);
  text("Amount of Distortion", width / 5, height / 2 + 10);

  textSize(20);
  fill("black");
  textAlign(CENTER);
  text("Reverb", width / 5 + 400, height / 2 - 5);

  textSize(10);
  fill("black");
  textAlign(CENTER);
  text("Room Size", width / 5 + 400, height / 2 + 10);
}
function play1() {
  multiplayer.player("drums").start();
}
function play2() {
  multiplayer.player("guitar").start();
}
function play3() {
  multiplayer.player("sax").start();
}
function play4() {
  multiplayer.player("Bass").start();
}
function play5() {
  multiplayer.player("trumpet").start();
}
function play6() {
  multiplayer.player("piano").start();
}
function play7() {
  multiplayer.player("bell").start();
}
function play8() {
  multiplayer.player("cymbal").start();
}
