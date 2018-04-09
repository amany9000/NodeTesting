var express = require("express");

var app = express();

app.get("/",(req,res) =>{
	res.status(200).send({
	head  :"Test Webpage",
	text  :"This is a webpage to test express based webapps through supertest"  
});
})

app.get("/users",(req,resp) => {
	resp.status(404).send([{
		name : "Kirtika",
		age : 90
	},
	{
		name : "Aman",
		age : 20
	},
	{
		name : "Roshni",
		age : 02
	}
	])
})
app.listen("4000");

module.exports.app = app;