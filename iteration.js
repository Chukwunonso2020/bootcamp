//COnsidering "while loop and for loop"

//For loop
// for (var x = 0; x <= 10; x+=2) {
//     console.log("x = " + x);
// }

//While loop: define your starting point, give your condition in your loop 
//and console then conclude with your end point.
// var x = 0;
// while (x <= 10) {
//     console.log("I am " + x)
// x++;
// }

// var number = 0;
// var stop = 10;
// var sum = 0;
// while (number <= stop){
//     sum += number;
//     console.log(sum);
//     number++
// }
// console.log("Total: " + sum);


var sum = 0;
for (var x = 0; x <= 10; x++) {
    sum += x;
    console.log(sum);
}
console.log("Total:" + sum);
