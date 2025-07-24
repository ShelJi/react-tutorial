var concatStringsTS = function (a, b, c) {
    if (c === void 0) { c = "cat"; }
    return a + b + c;
};
console.log(concatStringsTS("a", "b", "c"));
console.log(concatStringsTS("a", "b"));
