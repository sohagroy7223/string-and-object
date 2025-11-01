// ***// String is immutable----> Not Changeable***
//***// Array is mutable -----You can change the array elements ***

// how can find string typeof***

// const country = "Bangladesh";
// const division = "Rangpur";
// const zila = `Lalmonirhat`;
// const upozila = new String("Kaligonj");(Object)

// console.log(typeof country);
// console.log(typeof division);
// console.log(typeof zila);
// console.log(typeof upozila);

// Array Element can change *****--->> mutable

let numbers = [12, 23, 44, 67, 89, 45, 78];
console.log(numbers.length);
numbers[5] = 100;
console.log(numbers);

// String Element not changeable**--->> immutable

const division = "Rangpur";
console.log(division.length);
// console.log(division[3]);
division[0] = "j";
console.log(division);
