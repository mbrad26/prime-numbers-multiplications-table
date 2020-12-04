## Prime numbers multiplication table

This a small project to calculate and print out a multiplication table of the first **n** prime numbers.

### Getting started

Clone this repository to your local machine.

```js
// install dependencies
$ npm install

// run tests
$ npm test --  --coverage --verbose --watchAll

// run program
$ node lib/app.js
```

### The good parts

* I kept my commits atomic - only commiting on green and after each refactoring;
* I followed a strict TDD approach - write a failing test first;
* I tried to test each function in isolation;
* All functions are relative short and only responsible for doing one thing;
* I am happy with how I named all functions - you can easily tell what each function is doing;
* Test coverage is 100%
* Tests are highly efective - scanned with Stryker Mutator and got 100% all green.

### What I would do if I had more time

* Improve the algorithm - try to implement a sieve of Eratosthenes, this will result in a faster prime number generator and also a reduced amount of code to maintain;
* Implement an object oriented solution;
* Improve my TDD process - on some occassions I made too much of jump from one test to another;
* I took an inside-out approach to my testing, at least in the beginning - so I would like to try the reverse, going outside-in coupled with an OOP aproach;
