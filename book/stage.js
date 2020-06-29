var stage = document.getElementById("stage")
console.log(stage);

stage.width = window.innerWidth;
stage.height = window.innerHeight;


// function Sticker(context) {

// }

// s = new Sticker(stage);

var box = stage.getContext('2d');

box.fillStyle = 'rgba(255,0,0,0.5)';
box.fillRect(100,100,100,100);

console.log(stage);


