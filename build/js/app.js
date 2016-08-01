(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Entry = require('./../js/vowelsConsonants.js').entryModule;

$(document).ready(function() {
  $('#journal-form').submit(function(event) {
    event.preventDefault();
    var title = $("#title").val();
    var body = $("#body").val();
    var entry = new Entry(title, body);
    var answer = entry.vowelsConsonants(body);
    $('#solution').prepend("<p>" + answer + "</p>");
  });
});

},{"./../js/vowelsConsonants.js":2}],2:[function(require,module,exports){
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

},{}]},{},[1]);
