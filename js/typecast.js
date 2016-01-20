console.log(5 + '5'); //55
console.log(typeof(5 + '5')); //string

console.log(5 * '5'); // 25
console.log(typeof(5 * '5')); // number

console.log(5 * 'hi'); // NaN
console.log(typeof(5 * 'hi')); // number


//!important
console.log(Boolean("0")); //true
console.log(+""); // 0
console.log(+true); // 1


//tests

/*
console.log("5" == 5); 
console.log("0" == false); 
console.log(0 == false); 
console.log("5" == true); 
console.log("" == false); 
console.log(null == false); 
console.log(null == true); 
console.log(undefined == false); 
console.log(undefined == true); 
console.log(undefined == null); 

console.log("" + 1 + 0);
console.log("" - 1 + 0);
console.log(true + false);
console.log(6 / "3");
console.log("2" * "3");
console.log(4 + 5 + "px");
console.log("$" + 4 + 5);
console.log("4" - 2);
console.log("4px" - 2);
console.log(7 / 0);
console.log("  -9\n" + 5);
console.log("  -9\n" - 5);
console.log(5 && 2);
console.log(2 && 5);
console.log(5 || 0);
console.log(0 || 5);
console.log(null + 1);
console.log(undefined + 1);
console.log(null == "\n0\n");
console.log(+null == +"\n0\n");

console.log(!!"test");
console.log(+"")
console.log(+"4")
console.log(+"  4  ")
console.log(+" 4 em")

console.log(+true);
console.log(+false);
*/

// fast convert perls

var value = Number("555");
console.log(value + " "+ typeof(value))
	value = String(555);
console.log(value + " " + typeof(value));
	value = Boolean(1)
console.log(value + " " + typeof(value));

console.log(!!5); // to bool (return true)
console.log(!!0); // to bool (return false)

console.log(typeof(23 + "")); //to string
console.log(typeof +"23"); //to number

//convert via wrapper methods
var number = 25;
console.log(number.toString());
console.log(number.toString(2)); 
console.log(number.toString(3));
console.log(String(Infinity));
console.log(String(NaN));

//parse
console.log(parseInt("45 px"));
console.log(parseFloat("23.2 em"));

//
var number = 256;
console.log(number.value);
	number = "256";
console.log(number.value);
	number = null;
console.log(number.value); // type error!


