var toEncode = prompt("Enter a sentence: ");

var capitalize = function (sentence) {
  var wordLength = sentence.length;
  return sentence.charAt(0).toUpperCase() + sentence.slice(1, wordLength - 1) + sentence.charAt(wordLength - 1).toUpperCase();
  };

alert(capitalize(toEncode));