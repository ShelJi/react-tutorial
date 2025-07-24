// other function in js conflict with this even name is change of the parent file

var concatStringsTS = function (a: string, b: string, c: string) {
	return a + b + c;
};

console.log(concatStringsTS("a", "b", "c"));
console.log(concatStringsTS("a", "b"));
