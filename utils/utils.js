// Functions being used by utils.test.js
module.exports.add = (a,b) => a+b;

module.exports.square = (a) => a*a;

module.exports.mult = (a,b) => a*b;

module.exports.pow = (a,b) => a**b;


//Functions being used by Expect.test.js
module.exports.lower = (a) => a.toLowerCase();
module.exports.name = (a) =>{
	var fullname = a.name.split(" ");
	return {
		fullName  : a.name,
		fname : fullname[0],
		lname : fullname[1]
	}
};

module.exports.upper = (a,callback) => {
	setTimeout(() => {
		callback(a.toUpperCase())},300);
};
 
var Upper = (a,callback) => {
	setTimeout(() => {
		callback(a.toUpperCase())},300);
}; 
module.exports.asyncName = (a,callback) =>{
	setTimeout(()=>{
	var fullname = a.name.split(" ");
	callback({
		fullName  : a.name,
		fname : fullname[0].toUpperCase(),
		lname : fullname[1].toUpperCase()
	})
	},1000);
};