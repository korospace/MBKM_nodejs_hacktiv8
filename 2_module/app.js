/**
 * Memanggil Module
 */
const xx = require("./calculate");

console.log(xx.penambahan(10,2));

/**
 * Menambah Module
 */
xx.pengurangan = (a,b) => {
    return a-b;
}

module.exports = xx;

console.log(xx.pengurangan(10,2));

/**
 * Overide Function di Module
 */
delete xx['penambahan'];

xx.penambahan = (a,b) => {
    return `hasil penambahan ${a} + ${b} adalah ${a+b}`;
}

module.exports = xx;

console.log(xx.penambahan(10,4));