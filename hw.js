var vectorInit = function (dimension) {
	return Array(dimension).fill(0);
}

var vectorDimension = function (vector) {
	return vector.length;
}

var a = vectorInit(3);
var d = vectorDimension(a);

console.log(d);
