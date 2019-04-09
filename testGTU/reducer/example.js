var numbers = [5, 3, 8, 6, 9, 1, 0, 2, 2];

function isOdd(n) {
  return !!(n % 2);
}

var oddEvenCounts = numbers.reduce(function(counts, number) {
  if (isOdd(number)) {
    counts.odd++; // use dot notation or ['odd']
  } else {
    counts.even++;  // use dot notation or ['even']
  }
  
  return counts; // return the accumulator
}, { odd: 0, even: 0 }); // set the initial values of odd and even

console.log(oddEvenCounts);