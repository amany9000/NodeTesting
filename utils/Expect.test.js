var expect = require("expect");
var utils = require("./utils")

it("Should convert the string to upper case",()=>{
	var result = utils.upper("Luke I'm your Father!");
	expect(result).toBeDefined();
	expect(result).toBe("LUKE I'M YOUR FATHER!");
});

it("Should divide the name into firstname and lastname",()=>{
	var result = utils.name({
		name : "Bruce Wayne",
	});
	expect(result).toBeDefined();
	expect(result).toEqual(
		expect.objectContaining({
		fname : "Bruce",
		lname : "Wayne"
	}))
});