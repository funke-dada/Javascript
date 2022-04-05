let Fizz = [ ]; //Divisible by 3
let Buzz = [ ]; // Divisible by 5
let FizzBuzz = [ ]; //Divisible by 3 and 5
let Others  = [ ]; //Others
let LoopNum = 200;

for (let i = 1; i <= LoopNum; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        FizzBuzz.push(i);
     }  else if (i % 3 === 0) {
        Fizz.push(i);
     }else if (i % 5 === 0) {
        Buzz.push(i);
     } else {
         Others.push(i);
    }
}

console.log("Total Number of Fizz = " + Fizz.length);
console.log("Total Number of Buzz = "  + Buzz.length);
console.log("Total Number of FizzBuzz = " + FizzBuzz.length);
console.log("Total Number of Other = " + Others.length);

// -----------------------------------------------------------------------------
// --------------------------------------------------------------------------------
// ------------------------------------------------------------------------------

let odd= [];
let even = [];
function UserID(numLoop){
   for (let i = 1; i <= numLoop; i++){
      if (i % 2 ===0){
   even.push(i);
      } else{
   odd.push(i)
      }
   }
   console.log("Total Number of Even UserID = " + even.length);
   console.log("Total Number of Odd UserID = "+ odd.length);
}

UserID(100)