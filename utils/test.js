var Upper = (a,callback) => {
	setTimeout(() => {
		callback(a.toUpperCase())},300);
}; 
    a = {
		name : "Bruce Wayne",
	}
	var fullname = a.name.split(" ");
	var x,y;
	x = Upper(fullname[0], (result) => {
		//x = result;	
		//console.log(x)
		});
	Upper(fullname[1], (result) => {
		y = result;	
		});
	console.log(x,y);