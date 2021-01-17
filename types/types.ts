//////////////////////////explicit types//////////////////////////
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

let char: string;
let age: number;
let isAdmin: boolean;

char = 'Tony';
age = 33;
isAdmin = true;

//////////////////////////array//////////////////////////
let dogs: string[] = []; ///makes an array of only string
let cats: number[] = []; ///makes an array of only number
let birds: boolean[] = []; ///makes an array of only boolean

dogs.push('Tony');
cats.push(33);
birds.push(false);

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

//////////////////////////objects//////////////////////////
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
type Combinable = number | string;
type Convertable = 'as-number' | 'as-text';

const combine = (
  input1: Combinable,
  input2: Combinable,
  convert: Convertable
) => {
  let result;
  if (
    (typeof input1 === 'number' && typeof input2 === 'number') ||
    convert === 'as-number'
  ) {
    return (result = +input1 + +input2);
  } else {
    return (result = input1.toString() + input2.toString());
  }
};

const combineNums = combine(31, 33, 'as-number');
const combineNumsStr = combine('31', '33', 'as-number');
const combineStr = combine('Tony', ' Paloni', 'as-text');

console.log(combineNums);
console.log(combineNumsStr);
console.log(combineStr);

let mixed: (string | number | boolean | object | (string | number)[])[] = []; //can only use types declared
mixed.push('hello');
mixed.push(33);
mixed.push(true);
mixed.push({ message: 'hi', data: { num: 33, isAlot: true } });
mixed.push(['array', 'of', 'strings']);
console.log(mixed);

let uuid: string | number;
uuid = 'ksjdhfkjsdf896797869889';
uuid = 908734772634823749823;

////////////////////////Classes////////////////////////
class Bill {
  client: string;
  details: string;
  amount: number;

  constructor(client: string, details: string, amount: number) {
    this.client = client;
    this.details = details;
    this.amount = amount;
  }

  render() {
    return `${this.client} owes $${this.amount} for ${this.details}`;
  }
}

////////////////////////Interfaces////////////////////////
interface IsPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}

const me: IsPerson = {
  name: 'John',
  age: 34,
  speak(text: string): void {
    console.log(text);
  },
  spend(amount: number): number {
    console.log('I spent', amount);
    return amount;
  },
};

const greetPerson = (person: IsPerson) => {
  console.log('hello ', person.name);
};

////////////////////////Generics////////////////////////
//generic function to create an uid when creating an object
let addUid = <T extends object>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};

let userOne = addUid({ name: 'Tony', age: 4 });

console.log(userOne.uid);
// logs
// {
//   age: 4
//   name: "Tony"
//   uid: <random number>
// }

//using generics with interface
