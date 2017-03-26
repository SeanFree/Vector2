'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function (Math) {
  var Vector2 = function () {
    function Vector2(x, y) {
      _classCallCheck(this, Vector2);

      this.x = x || 0;
      this.y = y || 0;
      return this;
    }

    Vector2.prototype.zero = function zero() {
      this.x = 0;
      this.y = 0;
      return this;
    };

    Vector2.prototype.clone = function clone() {
      return new Vector2(this.x, this.y);
    };

    Vector2.prototype.add = function add(vec) {
      this.x += vec.x || 0;
      this.y += vec.y || 0;
      return this;
    };

    Vector2.prototype.addX = function addX(vec) {
      this.x += vec.x || 0;
      return this;
    };

    Vector2.prototype.addY = function addY(vec) {
      this.y += vec.y || 0;
      return this;
    };

    Vector2.prototype.addScalar = function addScalar(scalar) {
      this.x += scalar || 0;
      this.y += scalar || 0;
      return this;
    };

    Vector2.prototype.addScalarX = function addScalarX(scalar) {
      this.x += scalar || 0;
      return this;
    };

    Vector2.prototype.addScalarY = function addScalarY(scalar) {
      this.y += scalar || 0;
      return this;
    };

    Vector2.prototype.sub = function sub(vec) {
      this.x -= vec.x || 0;
      this.y -= vec.y || 0;
      return this;
    };

    Vector2.prototype.subX = function subX(vec) {
      this.x -= vec.x || 0;
      return this;
    };

    Vector2.prototype.subY = function subY(vec) {
      this.y -= vec.y || 0;
      return this;
    };

    Vector2.prototype.subScalar = function subScalar(scalar) {
      this.x -= scalar || 0;
      this.y -= scalar || 0;
      return this;
    };

    Vector2.prototype.subX = function subX(scalar) {
      this.x -= scalar || 0;
      return this;
    };

    Vector2.prototype.subY = function subY(scalar) {
      this.y -= scalar || 0;
      return this;
    };

    Vector2.prototype.multiply = function multiply(vec) {
      this.x *= vec.x || 1;
      this.y *= vec.y || 1;
      return this;
    };

    Vector2.prototype.multiplyX = function multiplyX(vec) {
      this.x *= vec.x || 1;
      return this;
    };

    Vector2.prototype.multiplyY = function multiplyY(vec) {
      this.y *= vec.y || 1;
      return this;
    };

    Vector2.prototype.multiplyScalar = function multiplyScalar(scalar) {
      this.x *= scalar || 1;
      this.y *= scalar || 1;
      return this;
    };

    Vector2.prototype.multiplyScalarX = function multiplyScalarX(scalar) {
      this.x *= scalar || 1;
      return this;
    };

    Vector2.prototype.multiplyScalarY = function multiplyScalarY(scalar) {
      this.y *= scalar || 1;
      return this;
    };

    Vector2.prototype.divide = function divide(vec) {
      if (vec.x === 0 || vec.y === 0) {
        console.log('! Cannot divide by zero !');
        return;
      } else {
        this.x /= vec.x || 1;
        this.y /= vec.y || 1;
        return this;
      }
    };

    Vector2.prototype.divideX = function divideX(vec) {
      if (vec.x === 0) {
        console.log('! Cannot divide by zero !');
        return;
      } else {
        this.x /= vec.x || 1;
        return this;
      }
    };

    Vector2.prototype.divideY = function divideY(vec) {
      if (vec.y === 0) {
        console.log('! Cannot divide by zero !');
        return;
      } else {
        this.y /= vec.y || 1;
        return this;
      }
    };

    Vector2.prototype.divideScalar = function divideScalar(scalar) {
      if (scalar === 0) {
        console.log('! Cannot divide by zero !');
        return;
      } else {
        this.x /= scalar || 1;
        this.y /= scalar || 1;
        return this;
      }
    };

    Vector2.prototype.divideScalarX = function divideScalarX(scalar) {
      if (scalar === 0) {
        console.log('! Cannot divide by zero !');
        return;
      } else {
        this.x /= scalar || 1;
        return this;
      }
    };

    Vector2.prototype.divideScalarY = function divideScalarY(scalar) {
      if (scalar === 0) {
        console.log('! Cannot divide by zero !');
        return;
      } else {
        this.Y /= scalar || 1;
        return this;
      }
    };

    Vector2.prototype.getMagnitude = function getMagnitude() {
      return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    };

    Vector2.prototype.normalize = function normalize() {
      this.divideScalar(this.getMagnitude());
    };

    Vector2.prototype.randomize = function randomize(bounds) {
      bounds = bounds || new Vector2(1, 1);
      this.x = Math.random() * bounds.x;
      this.y = Math.random() * bounds.y;
      return this;
    };

    Vector2.prototype.addRandom = function addRandom(limit) {
      this.x += limit - Math.random() * (limit * 2);
      this.y += limit - Math.random() * (limit * 2);
    };

    Vector2.prototype.addRandomX = function addRandomX(limit) {
      this.x += limit - Math.random() * (limit * 2);
    };

    Vector2.prototype.addRandomY = function addRandomY(limit) {
      this.y += limit - Math.random() * (limit * 2);
    };

    Vector2.prototype.lerp = function lerp(vec, amount) {
      vec = vec || this;
      amount = amount || 0.05;
      this.x = (1 - amount) * this.x + amount * vec.x;
      this.y = (1 - amount) * this.y + amount * vec.y;
      return this;
    };

    Vector2.prototype.midpoint = function midpoint(vec) {
      var mp = new Vector2(this.x + vec.x, this.y + vec.y);
      mp.divideScalar(2);
      return mp;
    };

    Vector2.prototype.slope = function slope(vec) {
      return (vec.y - this.y) / (vec.x - this.x) * -1;
    };

    Vector2.prototype.intercept = function intercept(slope) {
      console.log(-slope * this.x + this.y);
      return -slope * this.x + this.y;
    };

    Vector2.prototype.distanceTo = function distanceTo(vec) {
      vec = vec || this;
      return Math.sqrt(Math.pow(vec.x - this.x, 2) + Math.pow(vec.y - this.y, 2));
    };

    Vector2.prototype.angleTo = function angleTo(vec, format) {
      vec = vec || this;
      format = format || 'rad';
      var angle = format === 'rad' ? Math.atan2(vec.y - this.y, vec.x - this.x) : format === 'deg' ? Math.atan2(vec.y - this.y, vec.x - this.x) * 180 / Math.PI : undefined;
      return angle;
    };

    return Vector2;
  }();
})(window.Math);
