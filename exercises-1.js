/**
 * PART 1
 *
 * Write a JavaScript program that takes two numbers as parameters and computes the sum of those two numbers
 *
 * For example, if the user input 3 and 6, then the answer would be: "9 (3+6)".
 */

var sum = function(a, b) {
    "use strict";
    return a + b;
}

console.log(sum(8, 11));

/**
 * PART 2
 *
 * Write a JavaScript program that calculates the average time for this marathoner to complete the full marathon (26.2mi)
 */

var matt = {
    finishingTime1: 240, //in minutes
    finishingTime2: 210.4,
    finishingTime3: 235.1,
    finishingTime4: 208.9,
    finishingTime5: 197.5
};

var mark = {
    finishingTime1: 120, //in minutes
    finishingTime2: 110.4,
    finishingTime3: 135.1,
    finishingTime4: 108.9,
    finishingTime5: 97.5
};
var getAverageTime = function(person) {
    "use strict";
    var sumTime=0;
    var keysArray=Object.keys(person);
    for(var i=0;i<Object.keys(person).length;i++){
      sumTime=(sumTime+person[keysArray[i]]);
    }
    return sumTime/Object.keys(person).length;
}

console.log(getAverageTime(matt));
console.log(getAverageTime(mark));


/**
 * PART 3
 *
 *
 * Modify the following to calculate the difference between the two accounts.
 */

/**
 * declarations
 */

var MattsBankAccount = {
    checking: 0,
    savings: 0,
    retirement: 0
};

var RobertosBankAccount = {
    checking: 0,
    savings: 0,
    retirement: 0
};

function addToBank(account, savings, retirement, checking) {
    "use strict";
    account.savings = account.savings + savings;
    account.retirement = account.retirement + retirement;
    account.checking = account.checking + checking;
}

function getSumOfAccounts(account) {
    "use strict";
    var accSum=0;
    var keysArray=Object.keys(account);
    for(var i=0;i<Object.keys(account).length;i++){
      accSum=(accSum+account[keysArray[i]]);
    }
    return accSum;
}

addToBank(MattsBankAccount, 100, 10, 1);
addToBank(RobertosBankAccount, 200, 50, 19);

var sumOfMatts = getSumOfAccounts(MattsBankAccount);
var sumOfRobertos = getSumOfAccounts(RobertosBankAccount);

console.log(sumOfMatts - sumOfRobertos); // should calculate to -158




// HARD MODE*******************************************************************

function hardMode(){
  "use strict";
  var myArray=[];
  for(var i=1;i<101;i++){
    if(i%3===0){
      myArray.push("fizz");
    }else if(i%5===0){
      myArray.push("Buzz");
    }else{
      myArray.push(i);
    }
  }
  console.log(myArray);
}
hardMode();
