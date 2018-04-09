var expect = require("expect");
var utils = require("./utils")

describe("Expect Tests" , () => {
	it("Should convert the string to lower case",()=>{
		var result = utils.lower("Luke I'm your Father!");
		expect(result).toBeDefined();
		expect(result).toBe("luke i'm your father!");
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
});

