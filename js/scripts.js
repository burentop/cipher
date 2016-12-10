var toEncode = prompt("Enter a sentence: ");

var capitalize = function (sentence) {
  var wordLength = sentence.length;
  return sentence.charAt(0).toUpperCase() + sentence.charAt(wordLength - 1).toUpperCase();
};

var reverseFirstLast = function (sentence) {
  return sentence.charAt(1) + sentence.charAt(0);
};

var callFirstTwo = function () {
  return toEncode + reverseFirstLast(capitalize(toEncode));
};

var extractMiddle = function (sentence) {
  var wordLength = sentence.length;
  var middle = Math.floor(wordLength / 2);
  return sentence.charAt(middle) + sentence;
};

alert(extractMiddle(callFirstTwo()));