const utils = require("./utils.js");
it("should add two numbers", () => {
	var res = utils.add(20,31);
	if(res != 51)
		throw new Error(`Should be 51, but found ${res}`);
});

it("should square a number", () => {
	var res = utils.square(20);
	if(res != 400)
		throw new Error(`Should be 400, but found ${res}`);
});

it("should multiply two numbers", () => {
	var res = utils.mult(2,56);
	if(res != 112)
		throw new Error(`Should be 112, but found ${res}`);
});

it("should square two numbers", () => {
	var res = utils.pow(3,4);
	if(res != 81)
		throw new Error(`Should be 81, but found ${res}`);
});