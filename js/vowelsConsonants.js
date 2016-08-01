function Entry(title, body) {
  this.title = title;
  this.body = body;
}

Entry.prototype.vowelsConsonants = function(sentence) {
  var sentence = sentence.toLowerCase();
  var vowelCounter = 0;
  var consonantCounter = 0;
  for (var i = 0; i < sentence.length; i++) {
    if (sentence[i] === 'a' || sentence[i] === 'e' || sentence[i] === 'i' || sentence[i] === 'o' || sentence[i] === 'u') {
      vowelCounter++;
    } else if (sentence[i] !== ' ') {
      consonantCounter++;
    }
  }
  return "Vowels: " + vowelCounter + " Consonants: " + consonantCounter;
};

Entry.prototype.numberOfWords = function(sentence) {
  var separateWords = sentence.split(" ");
  return sentence + " contains " + separateWords.length + " words.";
};

Entry.prototype.preview = function(sentence) {
  var separateWords = sentence.split(" ");
  var outputString = '';
  for (var i = 0; i < 8; i++) {
    outputString += separateWords[i] + " ";
  }
  return outputString;
};

exports.entryModule = Entry;
