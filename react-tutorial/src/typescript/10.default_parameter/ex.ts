var concatStringsTS = function (a: string, b: string, c: string = "cat") {
	return a + b + c;
};

console.log(concatStringsTS("a", "b", "c"));
console.log(concatStringsTS("a", "b"));
