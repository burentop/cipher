var toEncode = prompt("Enter a sentence to be encrypted: ");

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

var reverse = function (sentence) {
  var theArray = sentence.split("");
  var reversed = theArray.reverse();
  return reversed.join("");
};

var after = reverse(extractMiddle(callFirstTwo()));



$(".before").click(function () {
  $(".results").html(toEncode);
});

$(".after").click(function () {
  $(".results").html(after);
});