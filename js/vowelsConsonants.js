function Entry(title, body) {
  this.title = title;
  this.body = body;
}

Entry.prototype.vowelsConsonants = function(sentence) {
  var sentence = sentence.toLowerCase();
  var vowelCounter = 0
  var consonantCounter = 0
  for (var i = 0; i < sentence.length; i++) {
    if (sentence[i] === 'a' || sentence[i] === 'e' || sentence[i] === 'i' || sentence[i] === 'o' || sentence[i] === 'u') {
      vowelCounter++;
    } else if (sentence[i] !== ' ') {
      consonantCounter++;
    }
  }
  return "Vowels: " + vowelCounter + " Consonants: " + consonantCounter;
};

exports.entryModule = Entry;
