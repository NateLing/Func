
// https://rosettacode.org/wiki/Currying#ES6

let fix = fn => (fn => fn(fn))(g => fn((...args) => g(g)(...args))),
	curry = f => fix(z => (n, ...a) => (n > 0 ? b => z(n - 1, ...a, b) : f(...a)))(f.length),
	curryrest = f => fix(z => (n, ...a) => (n > 0 ? b => z(n - 1, ...a, b) : (...b) => f(...a, ...b)))(f.length);

let curriedmax = curry(Math.max),
	curryrestedmax = curryrest(Math.max);
console.log(curriedmax(8)(4), curryrestedmax(8)(4)(), curryrestedmax(8)(4)(9, 7, 2));
