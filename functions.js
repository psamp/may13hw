///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
////    ______                _   _                ////
////    |  ___|              | | (_)               ////
////    | |_ _   _ _ __   ___| |_ _  ___  _ __     ////
////    |  _| | | | '_ \ / __| __| |/ _ \| '_ \    ////
////    | | | |_| | | | | (__| |_| | (_) | | | |   ////
////    \_|  \__,_|_| |_|\___|\__|_|\___/|_| |_|   ////
////                                               ////
////                                               ////
////    ______               _   _                 ////
////    | ___ \             | | (_)                ////
////    | |_/ / __ __ _  ___| |_ _  ___ ___        ////
////    |  __/ '__/ _` |/ __| __| |/ __/ _ \       ////
////    | |  | | | (_| | (__| |_| | (_|  __/       ////
////    \_|  |_|  \__,_|\___|\__|_|\___\___|       ////
////                                               ////
////                                               ////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////


// Q1
// Write a function called `sum` that takes two
// parameters and returns the sum of those 2 numbers.

function sum(x,y){
  x = 10;
  y = 110;
  var ans = x + y;
  return "The answer is " + ans + ".";
}

// Q2
// Write a function named `avg` that takes 3 parameters
// and returns the average of those 3 numbers.

function avg (x, y, z) {
  x = 87;
  y = 43;gg
  z = 35;
  var ans = x + y + z / 3;
  return "The average is " + ans + ".";
}

// Q3
// Write a function called `getLength` that takes one
// parameter (a string) and returns the length

function getLength(myName) {
  myName = "Princess";
  var myNameLength = myName.length;
  return "My name is " + myNameLength + " letters long."
}


// Q4
// Write a function called `greaterThan` that takes
// two parameters and returns `true` if the second
// parameter is greater than the first. Otherwise
// the function should return `false`.


function greaterThan(x, y) {
  
  x = 478;
  y = 876;

  if (y > x) {
    return true;
  } else {
    return false;
}

}

// Q5
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.


function greet(teachersName) {
teachersName = "Tim and J.D.";
var commandGreet = "Hello, " + teachersName + "!";
return commandGreet;
}

// Q6
// Write a function called `madlib` that takes
// 4 or more parameters (words). The function 
// should insert the words into a pre-defined
// sentence. Finally the function should return
// that sentence.
// Note: When I say words and sentence I mean
// strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"

function madlib(wordOne, wordTwo, wordThree, wordFour) {
  wordOne = "browser ";
  wordTwo = "tried ";
  wordThree = "file? ";
  wordFour = "'Stop ";
  var sentenceOne= "What did the ";
  var sentenceTwo = "say when the engineer ";
  var sentenceThree = "to link up a .scss "
  var sentenceFour = "sassing me!"
  var fullSentence = sentenceOne + wordOne + sentenceTwo + wordTwo + sentenceThree + wordThree + wordFour + sentenceFour;
  return fullSentence;

}

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////