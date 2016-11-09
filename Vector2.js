var Vector2 = (function(){
	function Vector2(x,y){
		this.x = x || 0;
		this.y = y || 0;
	}
	return Vector2;
})();

Vector2.prototype.zero = function(){
	this.x = 0;
	this.y = 0;
	return this;
};

Vector2.prototype.add = function(vec){
	this.x += vec.x || 0;
	this.y += vec.y || 0;
	return this;
};

Vector2.prototype.addX = function(vec){
	this.x += vec.x || 0;
	return this;
};

Vector2.prototype.addY = function(vec){
	this.y += vec.y || 0;
	return this;
};

Vector2.prototype.addScalar = function(scalar){
	this.x += scalar || 0;
	this.y += scalar || 0;
	return this;
};

Vector2.prototype.addScalarX = function(scalar){
	this.x += scalar || 0;
	return this;
};

Vector2.prototype.addScalarY = function(scalar){
	this.y += scalar || 0;
	return this;
};

Vector2.prototype.sub = function(vec){
	this.x -= vec.x || 0;
	this.y -= vec.y || 0;
	return this;
};

Vector2.prototype.subX = function(vec){
	this.x -= vec.x || 0;
	return this;
};

Vector2.prototype.subY = function(vec){
	this.y -= vec.y || 0;
	return this;
};

Vector2.prototype.subScalar = function(scalar){
	this.x -= scalar || 0;
	this.y -= scalar || 0;
	return this;
};

Vector2.prototype.subX = function(scalar){
	this.x -= scalar || 0;
	return this;
};

Vector2.prototype.subY = function(scalar){
	this.y -= scalar || 0;
	return this;
};

Vector2.prototype.multiply = function(vec){
	this.x *= vec.x || 1;
	this.y *= vec.y || 1;
	return this;
};

Vector2.prototype.multiplyX = function(vec){
	this.x *= vec.x || 1;
	return this;
};

Vector2.prototype.multiplyY = function(vec){
	this.y *= vec.y || 1;
	return this;
};

Vector2.prototype.multiplyScalar = function(scalar){
	this.x *= scalar || 1;
	this.y *= scalar || 1;
	return this;
};

Vector2.prototype.multiplyScalarX = function(scalar){
	this.x *= scalar || 1;
	return this;
};

Vector2.prototype.multiplyScalarY = function(scalar){
	this.y *= scalar || 1;
	return this;
};

Vector2.prototype.divide = function(vec){
	if (vec.x === 0 || vec.y === 0){
		console.log('! Cannot divide by zero !');
		return;
	}
	else{
		this.x /= vec.x || 1;
		this.y /= vec.y || 1;
		return this;
	}
};

Vector2.prototype.divideX = function(vec){
	if (vec.x === 0){
		console.log('! Cannot divide by zero !');
		return;
	}
	else{
		this.x /= vec.x || 1;
		return this;
	}
};

Vector2.prototype.divideY = function(vec){
	if (vec.y === 0){
		console.log('! Cannot divide by zero !');
		return;
	}
	else{
		this.y /= vec.y || 1;
		return this;
	}
};

Vector2.prototype.divideScalar = function(scalar){
	if (scalar === 0){
		console.log('! Cannot divide by zero !');
		return;
	}
	else{
		this.x /= scalar || 1;
		this.y /= scalar || 1;
		return this;
	}
};

Vector2.prototype.divideScalarX = function(scalar){
	if (scalar === 0){
		console.log('! Cannot divide by zero !');
		return;
	}
	else{
		this.x /= scalar || 1;
		return this;
	}
};

Vector2.prototype.divideScalarY = function(scalar){
	if (scalar === 0){
		console.log('! Cannot divide by zero !');
		return;
	}
	else{
		this.Y /= scalar || 1;
		return this;
	}
};

Vector2.prototype.randomize = function(bounds){
	bounds = bounds || new Vector2(1,1);
	this.x = Math.random() * bounds.x;
	this.y = Math.random() * bounds.y;
	return this;
}

Vector2.prototype.addRandom = function(limit){
	this.x += limit - Math.random() * (limit * 2);
	this.y += limit - Math.random() * (limit * 2);
}

Vector2.prototype.lerp = function(vec, amount) {
	vec = vec || this;
	amount = amount || 0.05;
	this.x = (1 - amount) * this.x + amount * vec.x;
	this.y = (1 - amount) * this.y + amount * vec.y;
	return this;
};

Vector2.prototype.angleTo = function(vec, format){
	vec = vec || this;
	format = format || 'rad';
	var angle = format === 'rad' ? Math.atan2(vec.y - this.y, vec.x - this.x) :
							format === 'deg' ? Math.atan2(vec.y - this.y, vec.x - this.x) * 180 / Math.PI :
							undefined;
	return angle;
};

Vector2.prototype.distanceTo = function(vec){
	vec = vec || this;
	return Math.sqrt(Math.pow(vec.x - this.x, 2) + Math.pow(vec.y - this.y, 2));
};