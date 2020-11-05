//Function
// function greetings(name, timeOfDay, gender) {
//    if (gender === "male") {
//     return "Hi " + name + " good" + timeOfDay + " sir";
//     } else (gender === "female") 
//      return "Hi " + name + " good " + timeOfDay + " ma";
// }
//      console.log(greetings("Rejoice", "evening", "female"));
    

function greetings(name, timeOfDay, gender){
     if(gender == "male"){
     console.log('Hello ' + name + ', good ' + timeOfDay + ' sir.');
     } else {
     console.log('Hello ' + name + ', good ' + timeOfDay + ' ma.');
     }
}
greetings('Nonso', 'morning', 'female');

function sumRange(range) {
     if (range == 0) {
          return range;
     }
     return range + sumRange(range -1);
}
console.log(sumRange(10));