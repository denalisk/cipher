// var sentence = "the rains in spain are berliners";
// var first = sentence.charAt(0).toUpperCase();
// var last = sentence.charAt(sentence.length-1).toUpperCase();
//
// var comboForwards = first + last;
// var comboBackwards = last + first;
//
// alert("First function results: " + comboForwards + " ///  Second function results " + comboBackwards);
//
// var sentenceWithout = sentence.substring(1,sentence.length-1);
// var newSentence = first + sentenceWithout + last;
// alert(newSentence);

var capFirst = function () {
  var first = prompt("Enter a sentence: ");
  var firstL = first.charAt(0).toUpperCase();
  var lastL = first.charAt(first.length-1).toUpperCase();
  var outPut = firstL + lastL;
  alert(outPut);
  return outPut;
}


var capReverse = function(capFirst) {
  var capRev = capFirst.charAt(1) + capFirst.charAt(0);
  alert(capRev);
  return capRev;
}

var thirdFunc = function() {
  capReverse(capFirst());
}

thirdFunc();
