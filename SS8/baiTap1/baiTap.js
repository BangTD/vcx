let Circle = function (radius) {
  this.radius = radius;
  this.getradius = function () {
      return this.radius;
  };
  this.getArea = function () {
      return Math.PI * getradius();
  }
};