var Entry = require('./../js/vowelsConsonants.js').entryModule;

$(document).ready(function() {
  $('#journal-form').submit(function(event) {
    event.preventDefault();
    var title = $("#title").val();
    var body = $("#body").val();
    var entry = new Entry(title, body);
    var vowelsConsonants = entry.vowelsConsonants(body);
    var numberOfWords = entry.numberOfWords(body);
    var preview = entry.preview(body);
    $('#solution').prepend("<p>" + vowelsConsonants + "</p> <br> <p>" + numberOfWords + "</p>");
    $('#solution').append("<p>Preview: " + preview + "</p>");
  });
});
