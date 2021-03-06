class Vector2 {
	constructor(x, y) {
		this.x = typeof x === 'number' ? x : 0;
		this.y = typeof y === 'number' ? y : 0;
		return this;
	}
	zero() {
		this.x = 0;
		this.y = 0;
		return this;
	}
	clone() {
		return new Vector2(this.x, this.y);
	}
	add(vec) {
		this.x += vec.x || 0;
		this.y += vec.y || 0;
		return this;
	}
	addX(vec) {
		this.x += vec.x || 0;
		return this;
	}
	addY(vec) {
		this.y += vec.y || 0;
		return this;
	}
	addScalar(scalar) {
		this.x += scalar || 0;
		this.y += scalar || 0;
		return this;
	}
	addScalarX(scalar) {
		this.x += scalar || 0;
		return this;
	}
	addScalarY(scalar) {
		this.y += scalar || 0;
		return this;
	}
	sub(vec) {
		this.x -= vec.x || 0;
		this.y -= vec.y || 0;
		return this;
	}
	subX(vec) {
		this.x -= vec.x || 0;
		return this;
	}
	subY(vec) {
		this.y -= vec.y || 0;
		return this;
	}
	subScalar(scalar) {
		this.x -= scalar || 0;
		this.y -= scalar || 0;
		return this;
	}
	subX(scalar) {
		this.x -= scalar || 0;
		return this;
	}
	subY(scalar) {
		this.y -= scalar || 0;
		return this;
	}
	multiply(vec) {
		this.x *= vec.x || 1;
		this.y *= vec.y || 1;
		return this;
	}
	multiplyX(vec) {
		this.x *= vec.x || 1;
		return this;
	}
	multiplyY(vec) {
		this.y *= vec.y || 1;
		return this;
	}
	multiplyScalar(scalar) {
		this.x *= scalar || 1;
		this.y *= scalar || 1;
		return this;
	}
	multiplyScalarX(scalar) {
		this.x *= scalar || 1;
		return this;
	}
	multiplyScalarY(scalar) {
		this.y *= scalar || 1;
		return this;
	}
	divide(vec) {
		if (vec.x === 0 || vec.y === 0) {
			console.log('! Cannot divide by zero !');
			return;
		}
		else{
			this.x /= vec.x || 1;
			this.y /= vec.y || 1;
			return this;
		}
	}
	divideX(vec) {
		if (vec.x === 0) {
			console.log('! Cannot divide by zero !');
			return;
		}
		else{
			this.x /= vec.x || 1;
			return this;
		}
	}
	divideY(vec) {
		if (vec.y === 0) {
			console.log('! Cannot divide by zero !');
			return;
		}
		else{
			this.y /= vec.y || 1;
			return this;
		}
	}
	divideScalar(scalar) {
		if (scalar === 0) {
			console.log('! Cannot divide by zero !');
			return;
		}
		else{
			this.x /= scalar || 1;
			this.y /= scalar || 1;
			return this;
		}
	}
	divideScalarX(scalar) {
		if (scalar === 0) {
			console.log('! Cannot divide by zero !');
			return;
		}
		else{
			this.x /= scalar || 1;
			return this;
		}
	}
	divideScalarY(scalar) {
		if (scalar === 0) {
			console.log('! Cannot divide by zero !');
			return;
		}
		else{
			this.Y /= scalar || 1;
			return this;
		}
	}
	getMagnitude() {
		return Math.sqrt(Math.pow(this.x,2) + Math.pow(this.y,2));
	}
	normalize() {
		this.divideScalar(this.getMagnitude());
	}
	randomize(bounds) {
		bounds = bounds || new Vector2(1,1);
		this.x = Math.random() * bounds.x;
		this.y = Math.random() * bounds.y;
		return this;
	}
	addRandom(limit) {
		limit = limit || 0;
		this.x += limit - Math.random() * (limit * 2);
		this.y += limit - Math.random() * (limit * 2);
	}
	addRandomX(limit) {
		limit = limit || 0;
		this.x += limit - Math.random() * (limit * 2);
	}
	addRandomY(limit) {
		limit = limit || 0;
		this.y += limit - Math.random() * (limit * 2);
	}
	lerp(vec, amount) {
		vec = vec || this;
		amount = amount || 0.05;
		this.x = (1 - amount) * this.x + amount * vec.x;
		this.y = (1 - amount) * this.y + amount * vec.y;
		return this;
	}
	midpoint(vec) {
		var mp = new Vector2((this.x + vec.x), (this.y + vec.y));
		mp.divideScalar(2);
		return mp;
	}
	slope(vec) {
		return ((vec.y - this.y) / (vec.x - this.x)) * -1;
	}
	intercept(slope) {
		console.log(-slope*this.x + this.y);	
		return -slope*this.x + this.y;
	}
	distanceTo(vec) {
		vec = vec || this;
		return Math.sqrt(Math.pow(vec.x - this.x, 2) + Math.pow(vec.y - this.y, 2));
	}
	angleTo(vec, format) {
		vec = vec || this;
		format = format || 'rad';
		var angle = format === 'rad' ? Math.atan2(vec.y - this.y, vec.x - this.x) :
								format === 'deg' ? Math.atan2(vec.y - this.y, vec.x - this.x) * 180 / Math.PI :
								undefined;
		return angle;
	}
}
