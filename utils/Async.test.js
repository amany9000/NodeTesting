var expect = require("expect");
var utils = require("./utils")
describe("Async Test of Utils", () => {
	it("Should asunc convert a string to upper case",(done)=>{
		utils.upper("Luke I'm your Father!", (result)=>{ 
		expect(result).toBeDefined();
		expect(result).toBe("LUKE I'M YOUR FATHER!");
		done();}
		); 
	});
	
	it("Should divide the name into firstname and lastname and make them both to upper case",(done)=>{
		utils.asyncName({
			name : "Harvey Dent",
		}, (result)=> { 
			expect(result).toBeDefined();
			expect(result).toEqual(
				expect.objectContaining({
					fname : "HARVEY",
					lname : "DENT"
				})) 
			done();
		})
	});
});