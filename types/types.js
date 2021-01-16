//primitive
var add = function (n1, n2, show, phrase) {
    if (show) {
        console.log(phrase + (n1 + n2));
    }
    return n1 + n2;
};
var number1 = 5;
var number2 = 4.5;
var printShow = true;
var printPhrase = 'The result is: ';
var res = add(number1, number2, printShow, printPhrase);
console.log(res);
//object & array
var person = {
    name: 'Tony',
    age: 5,
    hobbies: ['Eating', 'Sleeping', 'Coding'],
    role: [25, 'Author']
};
var mixedArray;
var onlyStringsArray;
person.hobbies.forEach(function (hobby) { return console.log(hobby.toLocaleUpperCase()); });
var Rating;
(function (Rating) {
    Rating[Rating["GOOD"] = 0] = "GOOD";
    Rating["OK"] = "Average";
    Rating[Rating["BAD"] = 1000] = "BAD";
})(Rating || (Rating = {})); //enum type => assign name to numbers or string
var rate = Rating.OK;
console.log(rate);
var idk; //any type is like no typescript
idk = 'just like JS';
idk = 10;
idk = true;
idk = {};
idk = [];
var combine = function (input1, input2, convert) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || convert === 'as-number') {
        return result = +input1 + +input2;
    }
    else {
        return result = input1.toString() + input2.toString();
    }
};
var combineNums = combine(31, 33, 'as-number');
var combineNumsStr = combine('31', '33', 'as-number');
var combineStr = combine('Tony', ' Paloni', 'as-text');
console.log(combineNums);
console.log(combineNumsStr);
console.log(combineStr);
