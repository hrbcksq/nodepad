// Bools

// Любые значения кроме этих при преобразовании в булевый тип вернут истину
// always false
console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(""));

//or with fast convert
console.log(!!0);
console.log(!!null);
console.log(!!undefined);
console.log(!!NaN);
console.log(!!"");

//operation
console.log(!false);

var value = 0, istrue = false;
istrue && (value = 5)
console.log(value)

