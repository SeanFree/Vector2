/* jshint esversion: 6 */

((main) => {

	this.requestAnimationFrame = (() => {
		return window.requestAnimationFrame ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame ||
			window.oRequestAnimationFrame ||
			window.msRequestAnimationFrame ||
			function(callback) {
				window.setTimeout(callback, 1000 / 60);
			};
	})();

	main(this, document, Vector2);

})((window, document, v2, undefined) => {

	'use strict';

	const TAU = Math.PI * 2,
		SIN = Math.sin,
		COS = Math.cos;

	const APP_DEFAULTS = {
		fillColor: 'rgba(5,5,8,1)',
		leaderColor: 'rgba(200,180,90,1)',
		leaderSize: 12,
		leaderThreshold: 120,
		followerColor: 'rgba(250,120,100,1)',
		followerSize: 8,
		followerThreshold: 80,
		particleCount: 3000,
		particleColor: 'rgba(185,0,80,1)',
		particleSize: 1
	};

	class Particle {
		constructor(bounds) {
			this.bounds = bounds;
			this.position = new v2();
			this.position.randomize(this.bounds);
			this.velocity = new v2();
			this.velocity.addRandom(2);
		}

		update() {
			this.position.add(this.velocity);
			if (this.position.x > this.bounds.x || this.position.x < 0) {
				this.velocity.x *= -1;
			}
			if (this.position.y > this.bounds.y || this.position.y < 0) {
				this.velocity.y *= -1;
			}
		}

	}

	class App {
		constructor() {
			this.props = JSON.parse(JSON.stringify(APP_DEFAULTS));
			this.tick = 0;
			this.dimensions = {
				x: 0,
				y: 0
			};
			this.mouseOver = false;

			this.mouse = new v2();
			this.center = new v2();
			this.leader = new v2();
			this.follower = new v2();
			this.orbitCenter = new v2();

			this.canvas = document.querySelector('.canvas');
			this.ctx = this.canvas.getContext('2d');

			this.resize();
			this.leader.x = this.center.x;
			this.leader.y = this.center.y;
			this.setHandlers();
			this.populate();
			this.initGUI();
			this.render();
		}

		resize() {
			this.canvas.width = this.dimensions.x = window.innerWidth;
			this.canvas.height = this.dimensions.y = window.innerHeight;
			this.orbitCenter.x = this.center.x = this.dimensions.x * 0.5;
			this.orbitCenter.y = this.center.y = this.dimensions.y * 0.5;
		}

		mouseHandler(e) {
			if (e.type === 'mouseenter' || e.type === 'mousemove') {
				this.mouse.x = e.clientX;
				this.mouse.y = e.clientY;
				this.mouseOver = true;
			} else {
				this.mouseOver = false;
			}
		}

		setHandlers() {
			let self = this,
				mouseEvts = ['mouseenter', 'mousemove', 'mouseleave'];
			window.onresize = () => {
				self.resize();
			};
			for (let i = 0, len = mouseEvts.length; i < len; i++) {
				self.canvas.addEventListener(mouseEvts[i], self.mouseHandler.bind(self));
			}
		}

		populate() {
			this.particles = [];
			for (let i = 0; i < this.props.particleCount; i++) {
				let p = new Particle(this.dimensions);
				this.particles.push(p);
			}
		}

		draw() {
			this.ctx.fillStyle = this.props.fillColor;
			this.ctx.fillRect(0, 0, this.dimensions.x, this.dimensions.y);
			this.ctx.save();
			this.drawParticles();
			this.drawLeader();
			this.drawFollower();
			this.ctx.restore();
		}

		drawLeader() {
			let previous = new v2(this.leader.x, this.leader.y);
			if (this.mouseOver) {
				this.orbitCenter.lerp(this.mouse);
			} else {
				this.orbitCenter.lerp(this.center);
			}

			let deltaX = COS(this.tick * 0.02) * 300,
				deltaY = SIN(this.tick * 0.04) * 150;

			this.leader.x = this.orbitCenter.x + deltaX;
			this.leader.y = this.orbitCenter.y + deltaY;

			this.ctx.fillStyle = this.props.leaderColor;
			this.ctx.beginPath();
			this.ctx.arc(this.leader.x, this.leader.y, this.props.leaderSize, 0, TAU)
			this.ctx.fill();
			this.ctx.closePath();
		}

		drawFollower() {
			if (this.mouseOver) {
				this.follower.lerp(this.mouse);
				this.follower.x += COS(this.tick * 0.05) * 6;
				this.follower.y += SIN(this.tick * 0.05) * 6;
			} else {
				this.follower.lerp(this.leader);
			}

			this.ctx.beginPath();
			this.ctx.fillStyle = this.props.followerColor;
			this.ctx.arc(this.follower.x, this.follower.y, this.props.followerSize, 0, TAU)
			this.ctx.fill();
			this.ctx.closePath();

		}

		drawParticles() {
			for (let i = 0, len = this.particles.length; i < len; i++) {
				let p = this.particles[i];
				p.update();
				if (p.position.distanceTo(this.leader) < this.props.leaderThreshold) {
					let theta = p.position.angleTo(this.leader),
						velocity = new v2(
							COS(theta) * 10,
							SIN(theta) * 10
						);
					p.velocity.lerp(velocity);
				}
				if (p.position.distanceTo(this.follower) < this.props.followerThreshold) {
					let theta = this.follower.angleTo(p.position),
						velocity = new v2(
							COS(theta) * 8,
							SIN(theta) * 8
						);
					p.velocity.lerp(velocity);
				}
				this.ctx.fillStyle = this.props.particleColor;
				this.ctx.fillRect(p.position.x, p.position.y, this.props.particleSize, this.props.particleSize);
			}
		}

		initGUI() {
			let self = this;

			this.gui = new dat.GUI();
			this.gui.addColor(this.props, 'fillColor');

			let f1 = this.gui.addFolder('Leader');
			f1.addColor(this.props, 'leaderColor');
			f1.add(this.props, 'leaderSize').step(1).min(1).max(20);
			f1.add(this.props, 'leaderThreshold').step(5).min(5).max(200);
			f1.open();

			let f2 = this.gui.addFolder('Follower');
			f2.addColor(this.props, 'followerColor');
			f2.add(this.props, 'followerSize').step(1).min(1).max(20);
			f2.add(this.props, 'followerThreshold').step(5).min(5).max(200);
			f2.open();

			let f3 = this.gui.addFolder('Particles');
			f3.addColor(this.props, 'particleColor');
			f3.add(this.props, 'particleSize').step(1).min(1).max(10);
			f3.add(this.props, 'particleCount').step(5).min(5).max(10000).onFinishChange(() => {
				self.populate();
			});
			f3.open();
		}

		render() {
			let self = this;
			self.tick++;
			self.draw();
			window.requestAnimationFrame(self.render.bind(self));
		}
	}

	window.onload = () => {
		let app = new App();
	};

});