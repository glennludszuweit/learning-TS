//primitive
const add = (n1: number, n2: number, show: boolean, phrase: string) => {
  if (show) {
    console.log(phrase + (n1 + n2));
  }
  return n1 + n2;
};

const number1 = 5;
const number2 = 4.5;
const printShow = true;
const printPhrase = 'The result is: ';

const res = add(number1, number2, printShow, printPhrase);
console.log(res);

//object & array
const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; //tuple type
} = {
  name: 'Tony',
  age: 5,
  hobbies: ['Eating', 'Sleeping', 'Coding'],
  role: [25, 'Author'],
};

let mixedArray: any[];
let onlyStringsArray: string[];

person.hobbies.forEach((hobby) => console.log(hobby.toLocaleUpperCase()));

enum Rating {
  GOOD,
  OK = 'Average',
  BAD = 1000,
} //enum type => assign name to numbers or string

const rate = Rating.OK;

console.log(rate);

let idk: any; //any type is like no typescript
idk = 'just like JS';
idk = 10;
idk = true;
idk = {};
idk = [];

//union types
type Combinable = number | string
type Convertable = 'as-number' | 'as-text'

const combine = (input1: Combinable, input2: Combinable, convert: Convertable) => {
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number' || convert === 'as-number') {
    return result = +input1 + +input2
  } else {
    return result = input1.toString() + input2.toString()
  }
};

const combineNums = combine(31, 33, 'as-number');
const combineNumsStr = combine('31', '33', 'as-number')
const combineStr = combine('Tony', ' Paloni', 'as-text')

console.log(combineNums);
console.log(combineNumsStr);
console.log(combineStr)
