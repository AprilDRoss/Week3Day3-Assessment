// 1.
// Without logging the values, list the value of `sports` and `total`
var sports = ['soccer', 'baseball'];
var total = sports.push('football', 'swimming');
// A:
sports = <soccer, baseball>
total = <soccer, baseball, football, swimming>


// 2.
// Using the `strings` array, write a function `longestString()`
// that accepts an array argument and returns the longest string in the array
// var strings = ['this','is','a','collection','of','words'];
// // A:
var longestString =function(array){
   let longestNum = ""
   for (let i = 0; i < array.length; i++){
     if (array[i].length > longestNum.length){
       longestNum = array[i];
     }
   }
   return longestNum;
 }



console.assert(longestString(strings) === 'collection', {"message": "longestString should return 'collection'"});


// Use the `numbers` array for questions 3 - 8.
// var numbers = [1,12,4,18,9,7,11,3,101,5,6];


// 3.
// Write a function `smallestNumber()` that accepts an array
// and returns the smallest number in the array.
// A:
// function smallestNumber(array){
var numbers = [1,12,4,18,9,7,11,3,101,5,6]
function smallestNumber(array)
  let smallestNum = 102;{
    for(let i = 0; i < array.length; i++){
      if(array[i] < smallestNum){
        smallestNum = array[i];
      }
    }
    return smallestNum
  }

console.assert(smallestNumber(numbers) === 1, {"message": "smallestNumber should return 1"});


// 4.
// Write a function `getEvens()` that accepts an array
// and returns only the even numbers in the array.
// A:
var numbers = [1,12,4,18,9,7,11,3,101,5,6]
function getEvens(array){
  var evenNumberArray = [];
  for(let i = 0; i < array.length i++){
    if numbers[i] %2 == 0){
      evenNumberArray.push(numbers [i]);
    }
  }
  return evenNumberArray
}



console.assert(getEvens(numbers).toString() === '12,4,18,6', {'message': 'getEvens should return "12,4,18,6"'});


// 5.
// Write a function that accepts an array argument
// and returns the array reversed
// Hint: When looping over the array, start at the last index
// and decrement the iterator to zero
// A:
var numbers = [1,12,4,18,9,7,11,3,101,5,6]
function reverseArray(array){
  var numbersInReverseArray =[];{
  for(let i =array.length; i >= 0; i--){
    numbersInReverseArray.push(array[i]);
  }
}
return numbersInReverseArray;
}
console.assert(arrayReverser(numbers).toString() === '6,5,101,3,11,7,9,18,4,12,1', {'message': 'arrayReverser should return "6,5,101,3,11,7,9,18,4,12,1"'});


// 6.
// Write a function that accepts an array argument
// and returns the sum of all of the numbers in the array
// A:
var numbers = [1,12,4,18,9,7,11,3,101,5,6]
function sumAll(array){
  let counter = 0;
  for(let i = 0; i < array.length; i++){
    counter += array[i];
  }
  return counter;
}

console.assert(sumArrayOfNumbers(numbers) === 177, {'message': 'sumArrayOfNumbers should return 177'});


// 7.
// Write a function that accepts an array argument
// and returns an array of only the numbers greater than 10
// A:
var numbers = [1,12,4,18,9,7,11,3,101,5,6]
function numbersOver10(array){
  let overTenArray =[];
  for(let i = 0; i < array.length; i++){
    if(array[i] > 10){
    }
  }
    return overTenArray;

console.assert(numbersOver10(numbers).toString() === "12,18,11,101", {'message': 'numbersOver10 should return "12,18,11,101"'});


// 8.
// Write a function that accepts both an array and number argument
// and returns an array of only the numbers greater than the number passed to the function
// A:
var numbers = [1,12,4,18,9,7,11,3,101,5,6]
function numbersOverX(array, number){
  let numOverXArray = [];
  for (let i = 0; i < array.length; i++){
    if(array [i] > number){
        numOverXArray.push(array[i]);
    }
  }
  return numOverXArray;
}



console.assert(numbersOverX(numbers, 15).toString() === "18,101", {'message': 'numbersOverX should return "18,101"'});

// 9.
// Write a function `joinArrays()` that takes an array of arrays,
// and returns a single array with the contents of the second array
// listed after the contents of the first array
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var numbersTwo = [33,56,72,2,5,66,90,21,42];
// A:
function joinArrays(array1, array2){
  for (var i = 0; i < array2.length; i++){
    array1.push(array[i]);
  }



console.assert(joinArrays([numbers, numbersTwo]).toString() === '1,12,4,18,9,7,11,3,101,5,6,33,56,72,2,5,66,90,21,42', {'message': 'joinArrays should return "1,12,4,18,9,7,11,3,101,5,6,33,56,72,2,5,66,90,21,42"'});


// 10.
// Using the `instructors` array, comment the value of each variable below
var instructors = [
    ['JD','JavaScript'],
    ['Tim','JavaScript'],
    ['Brit','Ruby'],
    ['Joe','iOS'],
    ['Dan','JavaScript'],
    ['Will','JavaScript'],
    ['Calvin','JavaScript'],
    ['James','Ruby']
];

var instructorNameDiscipline = instructors[5];
// greenvIlleInstructor = <Will, Javascript>

var instructorOne = instructors[4][0];
// instructorOne = <Dan>

var instructorTwo = instructors[0][1];
// instructorTwo = <Javascript>

var instructorThree = instructors[2][0];
// instructorThree = <Brit>
