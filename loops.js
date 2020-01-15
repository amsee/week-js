/**
 * 1. Sequence example: each statement is executed one after the other
 **/
var a = 3;
var b = 6;
var c = a + b;


/**
 * 2. Conditional examples: a decision is made based on the evaluation of an expression,
 * and a code path (or branch) taken.
 **/
var grade;
var mark = 86;

if (mark >= 90) {
    grade = 'A+';
} else if (mark >= 80) {
    grade = 'A';
} else if (mark >= 70) {
    grade = 'B';
} else if (mark >= 60) {
    grade = 'C';
} else if (mark >= 50) {
    grade = 'D';
} else { 
    grade='F';
}

switch(grade) {
    case 'A+':
        // do these steps if grade is A+
        break;
    case 'A':
        // do these steps if grade is A
        break;
    case 'B':
        // do these steps if grade is B
        break;
    case 'C':
        // do these steps if grade is C
        break;
    case 'D':
        // do these steps if grade is D
        break;
    default:
        // do these steps in any other case
        break;
}


/**
 * 3. Looping example: a set of statements are repeated
 **/

var total = 0;
for(var i = 1; i < 11; i++) {
    total += i;
    console.log("i", i, "total", total);
}


/**
 * 4. Transfer example: a set of statements are repeated
 **/

function add(a, b) {        // declaring the add function
    if(!b) {                // check if the b argument exists/has a value
        return a;           // if not, simply return the value of argument a
    }
    return a + b;           // otherwise, return the two arguments added together
}

var total;
total = add(56);            // invoking the add function with a single argument
total = add(total, 92);     // invoking the add function with two arguments