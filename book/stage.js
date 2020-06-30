window.onload = function () {
    var canvas = document.getElementById('stage');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    var context = canvas.getContext('2d');
    var touch = utils.captureTouch(canvas);
    //log = document.getElementById('log'),
    var sticker = new Sticker();

    sticker.x = canvas.width / 2;
    sticker.y = canvas.height / 2;
    var blue = document.getElementById("blue");
    sticker.image = blue;
    sticker.draw(context);

    canvas.addEventListener('touchstart', function (event) {
        event.preventDefault();
        if (utils.containsPoint(sticker.getBounds(), touch.x, touch.y)) {
            console.log("in sticker: touchstart");
            // sticker.x = touch.x;
            // sticker.y = touch.y;
            console.log(touch)
        } else {
            console.log("canvas: touchstart");
        }
    }, false);

    canvas.addEventListener('touchend', function (event) {
        event.preventDefault();
        console.log("canvas: touchend");
        console.log(touch.x)
    }, false);

    canvas.addEventListener('touchmove', function (event) {
        event.preventDefault();
        if (utils.containsPoint(sticker.getBounds(), touch.x, touch.y)) {
            console.log("in sticker: touchmove");
            sticker.x = touch.x;
            sticker.y = touch.y;
            console.log(sticker.x + " " + touch.x)
        } else {
            console.log("canvas: touchmove");
        }
    }, false);

    function drawFrame() {
        window.requestAnimationFrame(drawFrame, canvas);
        context.clearRect(0, 0, canvas.width, canvas.height);

        sticker.draw(context);
    };

    drawFrame();
};



// var stage = document.getElementById("stage")
// console.log(stage);

// stage.width = window.innerWidth;
// stage.height = window.innerHeight;


// // function Sticker(context) {

// // }

// // s = new Sticker(stage);

// var box = stage.getContext('2d');

// box.fillStyle = 'rgba(255,0,0,0.5)';
// box.fillRect(100,100,100,100);

// console.log(stage);