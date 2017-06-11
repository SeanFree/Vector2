'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Vector2 = function () {
	function Vector2(x, y) {
		_classCallCheck(this, Vector2);

		this.x = typeof x === 'number' ? x : 0;
		this.y = typeof y === 'number' ? y : 0;
		return this;
	}

	_createClass(Vector2, [{
		key: 'zero',
		value: function zero() {
			this.x = 0;
			this.y = 0;
			return this;
		}
	}, {
		key: 'clone',
		value: function clone() {
			return new Vector2(this.x, this.y);
		}
	}, {
		key: 'add',
		value: function add(vec) {
			this.x += vec.x || 0;
			this.y += vec.y || 0;
			return this;
		}
	}, {
		key: 'addX',
		value: function addX(vec) {
			this.x += vec.x || 0;
			return this;
		}
	}, {
		key: 'addY',
		value: function addY(vec) {
			this.y += vec.y || 0;
			return this;
		}
	}, {
		key: 'addScalar',
		value: function addScalar(scalar) {
			this.x += scalar || 0;
			this.y += scalar || 0;
			return this;
		}
	}, {
		key: 'addScalarX',
		value: function addScalarX(scalar) {
			this.x += scalar || 0;
			return this;
		}
	}, {
		key: 'addScalarY',
		value: function addScalarY(scalar) {
			this.y += scalar || 0;
			return this;
		}
	}, {
		key: 'sub',
		value: function sub(vec) {
			this.x -= vec.x || 0;
			this.y -= vec.y || 0;
			return this;
		}
	}, {
		key: 'subX',
		value: function subX(vec) {
			this.x -= vec.x || 0;
			return this;
		}
	}, {
		key: 'subY',
		value: function subY(vec) {
			this.y -= vec.y || 0;
			return this;
		}
	}, {
		key: 'subScalar',
		value: function subScalar(scalar) {
			this.x -= scalar || 0;
			this.y -= scalar || 0;
			return this;
		}
	}, {
		key: 'subX',
		value: function subX(scalar) {
			this.x -= scalar || 0;
			return this;
		}
	}, {
		key: 'subY',
		value: function subY(scalar) {
			this.y -= scalar || 0;
			return this;
		}
	}, {
		key: 'multiply',
		value: function multiply(vec) {
			this.x *= vec.x || 1;
			this.y *= vec.y || 1;
			return this;
		}
	}, {
		key: 'multiplyX',
		value: function multiplyX(vec) {
			this.x *= vec.x || 1;
			return this;
		}
	}, {
		key: 'multiplyY',
		value: function multiplyY(vec) {
			this.y *= vec.y || 1;
			return this;
		}
	}, {
		key: 'multiplyScalar',
		value: function multiplyScalar(scalar) {
			this.x *= scalar || 1;
			this.y *= scalar || 1;
			return this;
		}
	}, {
		key: 'multiplyScalarX',
		value: function multiplyScalarX(scalar) {
			this.x *= scalar || 1;
			return this;
		}
	}, {
		key: 'multiplyScalarY',
		value: function multiplyScalarY(scalar) {
			this.y *= scalar || 1;
			return this;
		}
	}, {
		key: 'divide',
		value: function divide(vec) {
			if (vec.x === 0 || vec.y === 0) {
				console.log('! Cannot divide by zero !');
				return;
			} else {
				this.x /= vec.x || 1;
				this.y /= vec.y || 1;
				return this;
			}
		}
	}, {
		key: 'divideX',
		value: function divideX(vec) {
			if (vec.x === 0) {
				console.log('! Cannot divide by zero !');
				return;
			} else {
				this.x /= vec.x || 1;
				return this;
			}
		}
	}, {
		key: 'divideY',
		value: function divideY(vec) {
			if (vec.y === 0) {
				console.log('! Cannot divide by zero !');
				return;
			} else {
				this.y /= vec.y || 1;
				return this;
			}
		}
	}, {
		key: 'divideScalar',
		value: function divideScalar(scalar) {
			if (scalar === 0) {
				console.log('! Cannot divide by zero !');
				return;
			} else {
				this.x /= scalar || 1;
				this.y /= scalar || 1;
				return this;
			}
		}
	}, {
		key: 'divideScalarX',
		value: function divideScalarX(scalar) {
			if (scalar === 0) {
				console.log('! Cannot divide by zero !');
				return;
			} else {
				this.x /= scalar || 1;
				return this;
			}
		}
	}, {
		key: 'divideScalarY',
		value: function divideScalarY(scalar) {
			if (scalar === 0) {
				console.log('! Cannot divide by zero !');
				return;
			} else {
				this.Y /= scalar || 1;
				return this;
			}
		}
	}, {
		key: 'getMagnitude',
		value: function getMagnitude() {
			return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
		}
	}, {
		key: 'normalize',
		value: function normalize() {
			this.divideScalar(this.getMagnitude());
		}
	}, {
		key: 'randomize',
		value: function randomize(bounds) {
			bounds = bounds || new Vector2(1, 1);
			this.x = Math.random() * bounds.x;
			this.y = Math.random() * bounds.y;
			return this;
		}
	}, {
		key: 'addRandom',
		value: function addRandom(limit) {
			limit = limit || 0;
			this.x += limit - Math.random() * (limit * 2);
			this.y += limit - Math.random() * (limit * 2);
		}
	}, {
		key: 'addRandomX',
		value: function addRandomX(limit) {
			limit = limit || 0;
			this.x += limit - Math.random() * (limit * 2);
		}
	}, {
		key: 'addRandomY',
		value: function addRandomY(limit) {
			limit = limit || 0;
			this.y += limit - Math.random() * (limit * 2);
		}
	}, {
		key: 'lerp',
		value: function lerp(vec, amount) {
			vec = vec || this;
			amount = amount || 0.05;
			this.x = (1 - amount) * this.x + amount * vec.x;
			this.y = (1 - amount) * this.y + amount * vec.y;
			return this;
		}
	}, {
		key: 'midpoint',
		value: function midpoint(vec) {
			var mp = new Vector2(this.x + vec.x, this.y + vec.y);
			mp.divideScalar(2);
			return mp;
		}
	}, {
		key: 'slope',
		value: function slope(vec) {
			return (vec.y - this.y) / (vec.x - this.x) * -1;
		}
	}, {
		key: 'intercept',
		value: function intercept(slope) {
			console.log(-slope * this.x + this.y);
			return -slope * this.x + this.y;
		}
	}, {
		key: 'distanceTo',
		value: function distanceTo(vec) {
			vec = vec || this;
			return Math.sqrt(Math.pow(vec.x - this.x, 2) + Math.pow(vec.y - this.y, 2));
		}
	}, {
		key: 'angleTo',
		value: function angleTo(vec, format) {
			vec = vec || this;
			format = format || 'rad';
			var angle = format === 'rad' ? Math.atan2(vec.y - this.y, vec.x - this.x) : format === 'deg' ? Math.atan2(vec.y - this.y, vec.x - this.x) * 180 / Math.PI : undefined;
			return angle;
		}
	}]);

	return Vector2;
}();