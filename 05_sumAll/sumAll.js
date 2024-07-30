const sumAll = function (num1, num2) {
  if (num1 < 1 || num2 < 1 ) return "ERROR";
  if (num1 % 1 !== 0 || num2 % 1 !== 0) return "ERROR";
  if((typeof num1 !== "number") || (typeof num2 !== "number")) return "ERROR";

  let largerNumber = Math.max(num1,num2);
  let smallerNumber = Math.min(num1,num2);
  let totalSum = 0;
  for (let i = smallerNumber; i <= largerNumber; i++) {
    totalSum += i;
  }
  return totalSum;
};

// Do not edit below this line
module.exports = sumAll;
