var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
//////////////////////////explicit types//////////////////////////
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
var char;
var age;
var isAdmin;
char = 'Tony';
age = 33;
isAdmin = true;
//////////////////////////array//////////////////////////
var dogs = []; ///makes an array of only string
var cats = []; ///makes an array of only number
var birds = []; ///makes an array of only boolean
dogs.push('Tony');
cats.push(33);
birds.push(false);
var person = {
    name: 'Tony',
    age: 5,
    hobbies: ['Eating', 'Sleeping', 'Coding'],
    role: [25, 'Author']
};
var mixedArray;
var onlyStringsArray;
person.hobbies.forEach(function (hobby) { return console.log(hobby.toLocaleUpperCase()); });
//////////////////////////objects//////////////////////////
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
    if ((typeof input1 === 'number' && typeof input2 === 'number') ||
        convert === 'as-number') {
        return (result = +input1 + +input2);
    }
    else {
        return (result = input1.toString() + input2.toString());
    }
};
var combineNums = combine(31, 33, 'as-number');
var combineNumsStr = combine('31', '33', 'as-number');
var combineStr = combine('Tony', ' Paloni', 'as-text');
console.log(combineNums);
console.log(combineNumsStr);
console.log(combineStr);
var mixed = []; //can only use types declared
mixed.push('hello');
mixed.push(33);
mixed.push(true);
mixed.push({ message: 'hi', data: { num: 33, isAlot: true } });
mixed.push(['array', 'of', 'strings']);
console.log(mixed);
var uuid;
uuid = 'ksjdhfkjsdf896797869889';
uuid = 908734772634823749823;
////////////////////////Classes////////////////////////
var Bill = /** @class */ (function () {
    function Bill(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Bill.prototype.render = function () {
        return this.client + " owes $" + this.amount + " for " + this.details;
    };
    return Bill;
}());
var me = {
    name: 'John',
    age: 34,
    speak: function (text) {
        console.log(text);
    },
    spend: function (amount) {
        console.log('I spent', amount);
        return amount;
    }
};
var greetPerson = function (person) {
    console.log('hello ', person.name);
};
////////////////////////Generics////////////////////////
//generic function to create an uid when creating an object
var addUid = function (obj) {
    var uid = Math.floor(Math.random() * 100);
    return __assign(__assign({}, obj), { uid: uid });
};
var userOne = addUid({ name: 'Tony', age: 4 });
console.log(userOne);
