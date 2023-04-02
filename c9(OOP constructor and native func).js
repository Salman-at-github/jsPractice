// To use a constructor function, I must prepend it with the operator new.

// For example, to create a new instance of the Date object, I can run: new Date(). What I get back is the current datetime, such as:

// Thu Feb 03 2022 11:24:08 GMT+0100 (Central European Standard Time) 

// However, not all the built-in objects come with a constructor function. An example of such an object type is the built-in Math object.

// Running new Math() throws an Uncaught TypeError, informing us that Math is not a constructor.

// Thus, I can conclude that some built-in objects do have constructors, when they serve a particular purpose: to allow us to instantiate a specific instance of a given object's constructor. The built-in Date object is perfectly suited for having a constructor because each new date object instance I build should have unique data by definition, since it's going to be a different timestamp - it's going to be built at a different moment in time.

// Other built-in objects that don't have constructors, such as the Math object, don't need a constructor. They're just static objects whose properties and methods can be accessed directly, from the built-in object itself. In other words, there is no point in building an instance of the built-in Math object to be able to use its functionality.

// For example, if I want to use the pow method of the Math object to calculate exponential values, there's no need to build an instance of the Math object to do so. For example, to get the number 2 to the power of 5, I'd run:

// Math.pow(2,5); // --> 32

// There's no need to build an instance of the Math object since there would be nothing that needs to be stored in that specific object's instance.

// Besides constructor functions for the built-in objects, I can also define custom constructor functions.

const date = new Date();
console.log(date)

//In other words, if you compare new String('plum') === new String('plum'), you'll get back false, while "plum" === "plum" returns true. You're getting the false when comparing objects because it is not the values that you pass to the constructor that are being compared, but rather the memory location where objects are saved.

//Instead of new Object, you should stick to the object literal syntax: {}.

// A RegExp object is another built-in object in JavaScript. It's used to pattern-match strings using what's known as "Regular Expressions". Regular Expressions exist in many languages, not just JavaScript.

// In JavaScript, you can built an instance of the RegExp constructor using new RegExp. 

// Alternatively, you can use a pattern literal instead of RegExp. Here's an example of using /d/ as a pattern literal, passed-in as an argument to the match method on a string.
"abcd".match(/d/); // null
"abcd".match(/a/); // ['a', index: 0, input: 'abcd', groups: undefined]


//Instead of using Array, Function, and RegExp constructors, you should use their array literal, function literal, and pattern literal varieties: [], () {}, and /()/.
//However, when building objects of other built-in types, we can use the constructor. Here are a few examples:

new Date();
new Error();
new Map();
new Promise();
new Set();
new WeakSet();
new WeakMap();