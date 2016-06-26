## Delegation based inheritance or Prototype based inheritance

Цепь прототипов (prototype chain) — это конечная цепь объектов, которая используется для организации наследования и разделяемых (shared) свойств.

Если прототип объекта не указан явно, тогда в качестве `__proto__` используется объект-прототип по-умолчанию — Object.prototype. Объект Object.prototype также имеет свой прототип `__proto__`, который является конечным звеном цепи и установлен в null. 


    var baseclass = {
        value : 1,    
        stage : function(){
            return this.value * this.chainValue;
        }        
    }
    
    var derived_first = {
        __proto__ : baseclass,
        chainValue : 2    
    }

    var derived_second = {
        __proto__ : derived_first,
        chainValue : 3
    }

Значение this при использовании унаследованного метода установлено в оригинальный объект, но не в (прототипный) объект, в котором метод был найден. Т.е. в примере выше this.y берётся из b и c, но не из a. Однако this.x уже берётся из a, и вновь — посредством механизма цепи прототипов.

    console.log(derived_second.stage())
    console.log(derived_second.__proto__.stage())

ES5 стандартизировал альтернативный путь для прототипного наследования, используя функцию Object.create:

    var b = Object.create(a, {y: {value: 20}});
    var c = Object.create(a, {y: {value: 30}});
