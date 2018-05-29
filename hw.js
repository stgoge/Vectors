var vectorInit = function (dimension) {
	var vector = [0];
	for (var i =1; i < dimension; i++) {
		vector[i]=0;
	}
	
	return vector;
}

var vectorDimension = function (vector) {
	return vector.length;
}

var a = vectorInit(3);
var d = vectorDimension(a);

console.log(d);