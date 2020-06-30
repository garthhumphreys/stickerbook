function Sticker(radius, color) {
  // if (radius === undefined) {
  //   radius = 140;
  // }
  if (color === undefined) {
    color = "#ff0000";
  }
  this.x = 0;
  this.y = 0;
  // this.radius = radius;
  this.vx = 0;
  this.vy = 0;
  this.rotation = 0;
  this.scaleX = 1;
  this.scaleY = 1;
  this.color = utils.parseColor(color);
  this.lineWidth = 1;
  this.image = null;
}

Sticker.prototype.draw = function (context) {
  context.save();
  // context.rect(this.x, this.y, 5, 5);
  // context.fillStyle = this.color;
  // context.fill();
  if (this.image != null) {
    context.translate(this.image.x - this.image.width / 2, this.image.y - this.image.height / 2);
    context.drawImage(this.image, this.x, this.y);
    //context.strokeRect(this.x, this.y, this.image.width, this.image.height);
    //console.log("blue is here" + this.image.src);
  }
  // context.translate(this.x, this.y);
  // context.rotate(this.rotation);
  // context.scale(this.scaleX, this.scaleY);

  // context.lineWidth = this.lineWidth;
  // context.fillStyle = this.color;
  // context.beginPath();
  // //x, y, radius, start_angle, end_angle, anti-clockwise
  // context.arc(0, 0, this.radius, 0, (Math.PI * 2), true);
  // context.closePath();
  // context.fill();
  // if (this.lineWidth > 0) {
  //   context.stroke();
  // }
  context.restore();
};

Sticker.prototype.getBounds = function () {
  return {
    x: this.x - this.width,
    y: this.y - this.height,
    width: this.width * 2,
    height: this.height * 2
  };
};