import curry from '../index.js';
import test from 'tape';


test('exec in sequence', t => {

	t.plan(7);

	var add5Numbers = function(a,b,c,d,e) {
			return a+b+c+d+e;
		},

		add5NumbersCurried = curry( add5Numbers ),

		results;

	t.equal( typeof add5NumbersCurried, "function");
	t.equal( add5NumbersCurried.length, 1);

	// invocation 1/5 should return a function
	results = add5NumbersCurried(5);
	t.equal( typeof results, "function");

	// invocation 2/5 should return a function
	results = results(10);
	t.equal( typeof results, "function");

	// invocation 3/5 should return a function
	results = results(2);
	t.equal( typeof results, "function");

	// invocation 4/5 should return a function
	results = results(100);
	t.equal( typeof results, "function");

	// invocation 5/5 should return the value 5 + 10 + 2 + 100 - 17 = 100
	results = results(-17);
	t.equal( results, 100);


});


test('exec all at once', t => {

	t.plan(2);

	var add5Numbers = function(a,b,c,d,e) {
			return a+b+c+d+e;
		},

		add5NumbersCurried = curry( add5Numbers );




	t.equal( add5NumbersCurried(1)(1)(1)(1)(1), 5);
	t.equal( add5NumbersCurried(10)(5)(5)(10)(70), 100);




});


test('allow variable length arguments functions by specifying expected length', t => {

	t.plan(2);

	var add = function(...args) {
			return args.reduce( (l,c)=>l+c, 0 );
		},

		add = curry( add, 5 );

	t.equal( add(1)(1)(1)(1)(1), 5);
	t.equal( add(10)(5)(5)(10)(70), 100);

});

