//

var error = new Error("Error content");
console.log(error.name);
console.log(error.message);

var calc = function(number){
	if (number === undefined) throw new Error("Number is undefined");
	return number;
};


try{
	calc();
}
catch(error){
	console.log("Name: " + error.name + " Message: " + error.message);		
}
finally{
	console.log("Finnaly");
}