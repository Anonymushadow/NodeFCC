//
const names = require("./modulo_uno"); 
//como modulo_dos solo exporta sayHi directamente agarro ese y lo uso
const sayHi = require("./modulo_dos"); 
require("./modulo_tres");

sayHi(names.john);
sayHi(names.peter);
