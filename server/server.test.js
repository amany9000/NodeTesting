var request = require("supertest")
var expect  = require("expect")
var app = require("./server").app;
describe("#Server", () => {
	describe("# GET /", ()=> { 
		it("Should return a hello world response of the webpage" ,(done) =>{
			request(app)
			.get('/')
			.expect(200)
			.expect((res) => {
				expect(res.body).toEqual(
					expect.objectContaining({
						head  :"Test Webpage",
						text  :"This is a webpage to test express based webapps through supertest"  
					})
				) 	
			})
		.end(done);
	});
});
	describe("#GET /users", ()=> { 
		it("Should return an array of users", (done) => {
			request(app)
			.get("/users")
			.expect(404)
			.expect((res) => {
				expect(res.body).toEqual(
					expect.arrayContaining([{
						name : "Aman",
						age  : 20
					}])
					)
			})
			.end(done)
		});
	});	
});