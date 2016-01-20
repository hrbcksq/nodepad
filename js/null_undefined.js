console.log(typeof null);
console.log(typeof undefined);

var temp;
console.log(temp);

var obj = {};
console.log(obj.property);

var array = [0,1,2];
console.log(array[3]);

function func(item){
	console.log("item is " + item);
}
func();

//!important

//with cast type 
console.log(null == undefined); // true

//without cast type 
console.log(null === undefined); // false

