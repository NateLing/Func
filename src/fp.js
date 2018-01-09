var compose = (f, g) => x => f(g(x));

var toUpperCase = function (x) {
	return x.toUpperCase();
};
var exclaim = function (x) {
	return x + '!';
};
var shout = compose(exclaim, toUpperCase);
var r_shout = compose(toUpperCase, exclaim);

console.log(shout('send in the clowns'));

console.log(r_shout('send in the clowns'));
