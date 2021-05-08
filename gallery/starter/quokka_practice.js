function Banking(balance) {
  function myBalance() {
    console.log(`your balance is ${balance}`);
  }

  function myWithdrawal(withdraw) {
    console.log(`your withdrawal ${withdraw}`);
  }

  return { foo: myBalance, myWithdrawal };
}

const bob = Banking(100);

bob.myWithdrawal(300);
bob.foo();

const magda = 'text';
const monkey = 'monkey';
const potato = 'potato';
const text = highlight`this is some ${magda} and ${monkey} ${potato}`;

function highlight(text, ...vars) {
  const output = text.map((part, index) => {
    if (index === text.length - 1) return;
    return `${part}<strong>${vars[index]}</strong>`;
  });

  return output.join('');
}

console.log(text);

const someObj = {
  name: 'Tom',
  age: 29,
  married: true,
  location: 'tahiti',
  pet: {
    dog: 'buster',
    turtle: 'teddy',
  },
};

const {
  name: whoIs,
  age,
  married,
  location,
  pet: { dog, turtle },
} = someObj;

console.log(dog);
console.log(turtle);

const someID = 'John-123-ABCD-4567';

console.log(someID.toLowerCase().startsWith('joh'));
console.log(someID.endsWith('67'));
console.log(someID.includes('ABC'));

const noChange = ['john', 'bill', 'mike'];

const newChange = noChange.map((foo) => foo);
newChange.push('terry');

console.log(newChange);
console.log(noChange);

const anObj = {
  name: 'Ted',
  age: 32,
  married: false,
  car: 'Honda',
};

const anNewObj = { ...anObj };
const anNewObjTwo = Object.assign({}, anObj);

console.log(anNewObj);
console.log(anNewObjTwo);

const someNum = [1, 6, 34, 3];
console.log(someNum);

console.log(Math.max(...someNum));

const newArr = [1, 2, 3, 4];
const newArr2 = Object.assign([], newArr);
const newArr3 = Array.from(newArr); // create a new Array
const newArr4 = Array.of('John', 4, true); // converts arguments into an array

newArr2.push(22);
newArr3.push(35);

console.log(newArr4);
console.log(newArr3);
console.log(newArr2);
console.log(newArr);

let first = 'mary';
//let second = ('tom'[(second, first)] = [first, second]);

console.log(first);

function addNum(...arg) {
  let addNumResult = Array.from(arg).reduce(
    (total, currNum) => (total += currNum),
    0
  );
  console.log(addNumResult);

  return addNumResult;
}

console.log(addNum(1, 5, 10, 3));

// Array.from(arg, map)... be default the second argument is the map method

// find... will find the first item
// findIndex... returns inside of first item
// every... returns true or false
// some ... returns true or false
// slice... returns a shallow copy
// splice... mutates the original

const tryFind = ['mike', 'rick', 'adam', 'rick', 'bill'];

const tryFind2 = tryFind.findIndex((name) => name === 'rick');
console.log(tryFind2);
