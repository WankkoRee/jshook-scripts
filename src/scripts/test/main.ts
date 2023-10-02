import {CoreTypeN} from "@/typings/main/enum";

console.log(runtime.appInfo);
console.log(runtime.classLoader);
console.warn(runtime.coreType === CoreTypeN.rhino);

console.log('es2016');

var array1 = [1, 2, 3];

console.log(array1.includes(2));
// expected output: true

var pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// expected output: true

console.log(pets.includes('at'));
// expected output: false


console.log('es2017');

var obj = { foo: 'bar', baz: 42 };
console.log(Object.values(obj)); // ['bar', 42]

// array like object
var obj1 = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.values(obj1)); // ['a', 'b', 'c']

// array like object with random key ordering
// when we use numeric keys, the value returned in a numerical order according to the keys
var an_obj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.values(an_obj)); // ['b', 'c', 'a']

// getFoo is property which isn't enumerable
var my_obj = Object.create({}, { getFoo: { value: function() { return this.foo; } } });
my_obj.foo = 'bar';
console.log(Object.values(my_obj)); // ['bar']

// non-object argument will be coerced to an object
console.log(Object.values('foo')); // ['f', 'o', 'o']

const obj3 = { foo: 'bar', baz: 42 };
console.log(Object.entries(obj3)); // [ ['foo', 'bar'], ['baz', 42] ]

// array like object
const obj4 = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.entries(obj4)); // [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ]

// array like object with random key ordering
const anObj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.entries(anObj)); // [ ['2', 'b'], ['7', 'c'], ['100', 'a'] ]

// getFoo is property which isn't enumerable
const myObj = Object.create({}, { getFoo: { value() { return this.foo; } } });
myObj.foo = 'bar';
console.log(Object.entries(myObj)); // [ ['foo', 'bar'] ]

// non-object argument will be coerced to an object
console.log(Object.entries('foo')); // [ ['0', 'f'], ['1', 'o'], ['2', 'o'] ]

// iterate through key-value gracefully
const obj2 = { a: 5, b: 7, c: 9 };
for (const [key, value] of Object.entries(obj2)) {
    console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
}

// Or, using array extras
Object.entries(obj2).forEach(([key, value]) => {
    console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
});

console.log('abc'.padStart(10));         // "       abc"
console.log('abc'.padStart(10, "foo"));  // "foofoofabc"
console.log('abc'.padStart(6,"123465")); // "123abc"
console.log('abc'.padStart(8, "0"));     // "00000abc"
console.log('abc'.padStart(1));          // "abc"
