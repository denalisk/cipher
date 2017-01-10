var getSentence = function() {
  var sentence = prompt("Enter a sentence: ");
  return sentence;
}

var sentence = getSentence();

var capFirst = function(sentence) {
  var firstL = sentence.charAt(0).toUpperCase();
  var lastL = sentence.charAt(sentence.length-1).toUpperCase();
  var outPut = firstL + lastL;
  // alert(outPut);
  return outPut;
}

var capReverse = function(capFirst) {
  var capRev = capFirst.charAt(1) + capFirst.charAt(0);
  // alert(capRev);
  return capRev;
}

var thirdFunc = function(sentence) {
  var capRev = capReverse(capFirst(sentence));
  var together = sentence + capRev;
  // alert(together);
  return together;
}

// thirdFunc(sentence);
// var half = sentence.length / 2;
// alert(charAt(hald))
// alert(half);

var fourthFunc = function(sentence) {
  var half = sentence.length / 2;
  var finalVar = thirdFunc(sentence);
  var mid = sentence.charAt(half);
  var final = mid + finalVar;
  alert(final);
}

var lastBit = fourthFunc(sentence);
