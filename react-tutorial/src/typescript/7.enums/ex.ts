enum Direction {
	Up,
	Down,
	Left,
	Right,
}

function move(direction_val) {
	console.log(`Moving ${Direction[direction_val].toLowerCase()}`);
}

move(Direction.Left);
