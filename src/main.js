import Vector2D from './components/Vector2D';
import Engine from './components/Engine';
import './main.css';

const engine = new Engine(1500, 800);

engine.loadStage(e => {
	e.addParticle(
		new Vector2D(750, 400),
		new Vector2D(0, 0),
		750,
		{ isStatic: true, polarity: 0, hasGravity: false, bounceFactor: 0.75 },
		1
	);

	e.addParticle(
		new Vector2D(1250, 600),
		new Vector2D(0, 0),
		500,
		{ isStatic: true, polarity: 0, hasGravity: false, bounceFactor: 0.75 },
		1
	);

	e.addParticle(
		new Vector2D(600, 300),
		new Vector2D(6, 0),
		50,
		{ isStatic: false, polarity: 0, hasGravity: true, bounceFactor: 0.75 },
		200
	);

	e.addParticle(
		new Vector2D(900, 300),
		new Vector2D(-6, 0),
		50,
		{ isStatic: false, polarity: 0, hasGravity: true, bounceFactor: 0.75 },
		200
	);
});

engine.start();

// setTimeout(() => {
// 	engine.loadStage(e => {
// 		e.addParticle(new Vector2D(200, 400), new Vector2D(0, 0), 500, true, 0, 1);

// 		e.addParticle(
// 			new Vector2D(600, 300),
// 			new Vector2D(6, 0),
// 			50,
// 			false,
// 			0,
// 			200
// 		);

// 		e.addParticle(
// 			new Vector2D(900, 300),
// 			new Vector2D(-6, 0),
// 			50,
// 			false,
// 			0,
// 			200
// 		);
// 	});
// }, 5000);
