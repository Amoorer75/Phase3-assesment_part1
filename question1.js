
// You are given a book as input. Write a function that takes all the words in the book as an input and returns the frequency of each word. Consider how you will take in the input, what data structures to use, and edge cases other than the given example. Test your function with 3 different inputs other than the example, and show that it works for the edge cases as well.

const wordRepeatCounter = (str) => {
 const arr = str.toLowerCase().split(' ');
 const amount = {}

 arr.forEach((word) => {
     if (amount[word]) {
         amount[word] += 1     
 }else{
     amount[word] = 1
 }
});

return amount

}

console.log(wordRepeatCounter('Is your favorite car brand BMW ? Mine is Toyota'))
console.log(wordRepeatCounter('I took the  '))
console.log(wordRepeatCounter('Is your favorite car brand BMW ? Mine is Toyota'))
