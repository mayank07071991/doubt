exports.add = function add(str) {
    var array = str.split("+");
    console.log(parseFloat(array[0]) + parseFloat(array[1]))
}
