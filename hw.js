var vectorInit = function (dimension) {
		if (typeof dimension === 'number') {
			return new Array(Math.floor(dimension)).fill(0);
		} else {
			return dimension ? null : [0,0];
		}
	}

var vectorDimension = function (vector) {
	return vector ? vector.length : null;
}

var a = vectorInit(3);
var d = vectorDimension(a);

console.log(d);
