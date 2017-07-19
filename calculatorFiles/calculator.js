var add = require('./add.js');
var sub = require('./subtract.js');

var mul = require('./multiply.js');
var div = require('./divide.js');

var str = "";

exports.calculator = function calculator(str) {

	console.log ('calculator is called') 



    if (str.includes("+")) {
        return add.add (str);
        console.log (add.add(str))

    } else if (str.includes("-")) {
        return sub.sub (str);
        console.log (sub.sub (str))
    } else if (str.includes("*")) {
       return  mul.mul (str);
        console.log (mul.mul(str))
    } else if (str.includes("/")) {
        return div.div (str);
        console.log (div.div(str))
    }
}

