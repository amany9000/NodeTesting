// Functions being used by utils.test.js
module.exports.add = (a,b) => a+b;

module.exports.square = (a) => a*a;

module.exports.mult = (a,b) => a*b;

module.exports.pow = (a,b) => a**b;


//Functions being used by Expect.test.js
module.exports.upper = (a) => a.toUpperCase();
module.exports.name = (a) =>{
	var fullname = a.name.split(" ");
	return {
		fullName  : a.name,
		fname : fullname[0],
		lname : fullname[1]
	}
};