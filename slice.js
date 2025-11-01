// slice Element**********for cut word

const numbers = [34, 35, 56, 78, 89, 90, 44, 34, 35];
// console.log(numbers.slice(1, 6));
const country = "Bangladesh";
const part = country.slice(0, 6);
console.log(part);

// split Element ****************for split sentence.
const school = "chamta hat high school";
console.log(school.split(" "));
console.log(school.split(","));

const friendSTR = "sohag, suon, oman, jibon, kaml, omol,fytr";
const friends = friendSTR.split(" ");
console.log(friends.join("|"));
console.log(friends.join("_"));
