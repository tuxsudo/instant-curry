import curry from '../index.js';
import test from 'tape';


test('Accepts arguments one at a time, in sequence, until all args are received', t => {

	t.plan(6);

	var add5Numbers = curry(function(a,b,c,d,e) {
			return a+b+c+d+e;
		}),

		results;



	t.ok( typeof add5Numbers==="function", "function expecting 5 arguments");


	// a) invocation 1/5 should return a function
	results = add5Numbers(5);
	t.equal( typeof results, "function", "invoke 1: still a function");

	// a+b) invocation 2/5 should return a function
	results = results(10);
	t.equal( typeof results, "function", "invoke 2: still a function");

	// a+b+c) invocation 3/5 should return a function
	results = results(2);
	t.equal( typeof results, "function", "invoke 3: still a function");

	// a+b+c+d) invocation 4/5 should return a function
	results = results(100);
	t.equal( typeof results, "function", "invoke 4: still a function");

	// invocation 5/5 should return the value 5 + 10 + 2 + 100 - 17 = 100
	results = results(-17);
	t.equal( results, 100, "invoke 5: now has all expected args, invokes & returns value");



});


test('Accepts any number of arguments. Only invokes when all expected arguments have been collected', t => {

	t.plan(4);

	var add5Numbers = curry(function(a,b,c,d,e) {
			return a+b+c+d+e;
		}),

		results;




	t.equal( add5Numbers(10, 5)(5, 10)(70), 100, "call multiple times with multiple args");
	t.equal( add5Numbers(1, 1, 1, 1, 1), 5, "call with all args at once");
	t.equal( add5Numbers(10, 5)(5, 10, 70, 20), 100, "call multiple times but exceed num expected args");
	t.equal( add5Numbers(10, 5, 5, 10, 70, 20, 100, 200, 3000, 34), 100, "call once but exceed num expected args");




});


