 // Area of a Circle, based on https://scs.senecac.on.ca/~btp100/pages/content/input.html
 // area.c

 #include <stdio.h>               // for printf

 int main(void)
 {
    const float pi = 3.14159f;   // pi is a constant float 
    float radius = 4.2;          // radius is a float
    float area;                  // area is a float

    area = pi * radius * radius; // calculate area from radius

    printf("Area = %f\n", area); // copy area to standard output

    return 0;
}

// Now the same program in JavaScript

var pi = 3.14159;                       // pi is a Number
var radius = 4.2;                       // pi is a Number (float)
var area;                               // area is (currently) Undefined

area = pi * radius * radius;            // calculate area from radius
console.log("Area = " + area + "\n");   // print area to the console

// Using Math.PI

var radius = 4.2;                       // radius is a Number
var area = Math.PI * radius * radius;   // calculate area from radius

console.log("Area", area);              // print area to the console