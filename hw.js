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

var doCompare = function (argA, argB, message) {
	if (argA === argB) {
		return true;
	} 
	console.log(message + '. expect: ' + argA + ', got: ' + argB);
	return false;
}

doCompare(2, vectorDimension(vectorInit(2)),'2 dim creation test');
doCompare(2, vectorDimension(vectorInit()),'undefined dim creation test');
doCompare(2, vectorDimension(vectorInit(null)),'null dim creation test');
doCompare(null, vectorDimension(vectorInit('23ebw')),'string dim creation test');



